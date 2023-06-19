/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-const */
/* eslint-disable dot-notation */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable one-var */
/* eslint-disable spaced-comment */
import Cookies from 'js-cookie';
import { getSesion, getUser, setUser } from 'redux/authentication/actionCreator'; 
import { LOOGEDIN, SESION_STORAGE, USER_STORAGE } from 'utility/constantes';
import { removeItem } from 'utility/localStorageControl';
import endpoints from './endpoints';

const cerrarSession = () => {
  Cookies.remove(LOOGEDIN);
  Cookies.remove(USER_STORAGE);
  removeItem(SESION_STORAGE);
  window.location.href = '/jaweb/admin/';
};

//******* CONEXION A SW
export default async function api(url, method = 'GET', bodyParam, tokenSesion, token, tokenRefresh = '') {
  let errorSW, data;
  let bodyParametro = null;
  const arrayErrores = mensajes();
  try {
    if (bodyParam != null) {
      bodyParametro = JSON.stringify(bodyParam);
    }
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

    if (!url.includes('/public') || !url.includes('seguridades-api-ws'))
      if (tokenSesion) {
        headers.Authorization = `Bearer ${getSesion().token}`;
      } else if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

    const request = {
      method: method,
      headers: headers,
      body: bodyParametro,
    };

    console.log('SW url:', url);
    console.log('SW headers:', headers);
    console.log('SW bodyParametro:', bodyParametro);
    console.log('SW request:', request);

    const res = await fetch(url, request);
    data = await res.json();

    if (res.status < 200 || res.status >= 300) {
      if (res.status === 403 && token && url !== endpoints.JWTRefresh) {
        const tokenData = await api(endpoints.JWTRefresh, 'POST', getUser(), false, getSesion().tokenRefresh, null);
        const newData = await api(url, method, bodyParam, false, tokenData.token, tokenData.tokenRefresh);
        newData.newToken = tokenData.token;
        newData.newTokenRefresh = tokenData.tokenRefresh;
        setUser(getUser(), { token: tokenData.token, tokenRefresh: tokenData.tokenRefresh });
        return newData;
      }

      let estado = data.estado;
      if (data.estado === null) {
        estado = res.status;
      }

      if ((url === endpoints.JWTRefresh && res.status === 403) || res.status === 401) {
        estado = -100;
      }
      errorSW = generaError(validarMensaje(data.mensaje, url), estado, res, res.status);
      if (estado === -100) {
        cerrarSession();
      }
    }
  } catch (error) {
    if (error.code === -100) {
      cerrarSession();
      errorSW = generaError('Su sesión ha expirado', 'expired_session');
    } else {
      let mensajeError = '';
      if (error.message) {
        arrayErrores.forEach((element) => {
          if (error.message.includes(element['message']) || error.message === element['message']) {
            mensajeError = element['mensaje'];
          }
        });
      } else {
        mensajeError = arrayErrores[0]['mensaje'];
      }
      let detError = mensajeError;
      if (mensajeError === '') {
        detError = error.message;
      }
      errorSW = generaError(detError, 'network_error');
    }
  }
  if (!errorSW) {
    console.log(' SW SIN ERROR: ', data);
    return data;
  }
  throw errorSW;
}

//******* GENERA ERROR
const generaError = (mensaje, code, res, status) => {
  let errorSW;
  let msjPantalla = 'Se ha generado un error en el sistema, notifique al administrador';
  if (mensaje) {
    msjPantalla = mensaje;
  }
  errorSW = new Error(msjPantalla);
  errorSW.res = res;
  errorSW.status = status;
  errorSW.code = code;
  return errorSW;
};

//******* VALIDA MENSAJES
const validarMensaje = (mensajeSW, url) => {
  let unexError = `Unexpected Error (${url})`;
  if (mensajeSW != null) {
    unexError = mensajeSW.replace(/<br>/g, '. ').replace(/<br\/>/g, '. ');
  }
  var mensaje = unexError;
  return mensaje;
};

//******* MENSAJES DE ERROR
const mensajes = () => {
  const arrayErrores = [
    {
      message: 'Unexpected end of JSON input',
      mensaje: 'Error de la red, por favor verifique la conexión',
    },
    {
      message: 'Failed to fetch',
      mensaje: 'Error de la red, por favor verifique la conexión',
    },
    {
      message: 'Network request failed',
      mensaje: 'Error de la red, por favor verifique la conexión',
    },
    {
      message: 'Unexpected token',
      mensaje: 'Se produjo un error al realizar la operación',
    },
    {
      message: 'Unrecognized token',
      mensaje: 'Se produjo un error al realizar la operación, verifique la conexión',
    },
  ];
  return arrayErrores;
};
