// utils/cookie.js
import Cookies from 'js-cookie';

export const setCookie = (name, value, days = 7) => {
  Cookies.set(name, value, { expires: days, path: '/' });
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const removeCookie = (name) => {
  Cookies.remove(name, { path: '/' });
};