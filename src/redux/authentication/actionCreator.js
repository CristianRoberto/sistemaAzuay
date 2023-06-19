/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
import Cookies from 'js-cookie';
import { LOOGEDIN, SESION_STORAGE, USER_STORAGE } from 'utility/constantes';
import { getItem, removeItem, setItem } from 'utility/localStorageControl';
import actions from './actions';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const setUser = (user, sesion) => {
  setItem(USER_STORAGE, user);
  setItem(SESION_STORAGE, sesion);
};

const login = (dataSesion) => {
  return async (dispatch) => {
    try {
      dispatch(loginBegin());
      Cookies.set(LOOGEDIN, true);
      setUser(dataSesion, {
        token: dataSesion.token,
        tokenRefresh: dataSesion.tokenRefresh,
      });
      return dispatch(loginSuccess(dataSesion));
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const cerrarSession = () => {
  Cookies.remove(LOOGEDIN);
  Cookies.remove(USER_STORAGE);
  removeItem(SESION_STORAGE);
  removeItem(USER_STORAGE);
  window.location.href = '/portal/admin/';
};

const logOut = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutBegin());
      Cookies.remove(LOOGEDIN);
      Cookies.remove(USER_STORAGE);
      removeItem(USER_STORAGE);
      removeItem(SESION_STORAGE);
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

const getUser = () => {
  let user = getItem(USER_STORAGE);
  if (user) return user;
  else return null;
};

const getSesion = () => {
  let sesion = getItem(SESION_STORAGE);
  if (sesion) return sesion;
  else return null;
};

const isDarkMode = () => { 
  return true;
};

const isTopMenu = () => {
  let user = getUser();
  if (user) return user.topMenu;
  else return false;
};

export { login, logOut, getUser, setUser, getSesion, isDarkMode, isTopMenu, cerrarSession };

