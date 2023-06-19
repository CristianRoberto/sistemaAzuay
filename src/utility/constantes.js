/* eslint-disable spaced-comment */
export const NOMBRE_APP = 'Jardin Azuayo Virtual'; 
export const LOGIN_APP = '/';

export const CODIGO_SERVICIO = '2';

export const LOOGEDIN = '@jasacin';
export const USER_STORAGE = '@jasacuser';
export const SESION_STORAGE = '@jasacsesion';

// ESTILO DE LOS CUADROS DE TEXTO
// outlined: CUADRO DE TEXTO
// standard: LINEA
export const TIPO_INPUT = 'outlined';

// TRUE:  VALIDA EL TOKEN EN EL KEYCLOAK
// FALSE: CARGA TODO CON UN TOKEN QUEMADO
export const ONLINE = false;

// URL AMBIENTE DESARROLLO
export const API_SW = ONLINE ? 'https://servicios.gti.fin.ec/' : 'http://172.18.5.57:1678/'; // 'http://192.168.43.92:8080/'; //'http://172.18.5.57:1678/';

// CONTEXTOS APP
export const HOME_APP = '/jaweb/admin';  
export const API_URL_TRX = `${API_SW}transaccional-api-ws-1.0/`;
export const API_URL_SEGURIDADES = `${API_SW}seguridades-api-ws-1.0/`; 

export const parameters = {
  cipherKey: '4756112463587241',
  cipherIV: '1112131415161718',
  keyAPILocations: 'eyJzdWIiOiJKYXJkaW5BenVheW8iLCJuYW1lIjoiSkFQQUdPUyIsImlhdCI6MTUxNjIzOTAyMn0',
  tamanioClave: 4,
};

export const ESTADOS = {
  PENDIENTE: 8,
};
