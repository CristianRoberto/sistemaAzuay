/* eslint-disable import/extensions */
import { API_URL_SEGURIDADES, API_URL_TRX } from 'utility/constantes';

const endpoints = {
  /* SEGURIDADES  * */
  login: `${API_URL_SEGURIDADES}public/login`,
  JWTRefresh: `${API_URL_SEGURIDADES}public/tokenRefresh`,

  /* HOME  * */
  home: `${API_URL_TRX}admin/home`,
};
export default endpoints;
