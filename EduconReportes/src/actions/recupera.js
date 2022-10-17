import { fetchAlumnoCampus, fetchEmailSend } from '../helpers/fetch';
import { types } from '../types/types';

const recuperaPassword = (alumno, active, found) => ({
  type: types.recuperaPassword,
  payload: alumno,
  active,
  found
});

const recuperaSend = (send) => ({
  type: types.recuperaSend,
  send
});

export const recuperaSearch = (alumno) => {
  console.log('Initial');

  return async (dispatch) => {
    try {
      const resp = await fetchAlumnoCampus('alumnos/alumno/', alumno, 'POST');
      const body = await resp.json();

      if (body.ok && body.alumno.length !== 0) {
        dispatch(recuperaPassword(body.alumno, true, true));
      } else {
        dispatch(recuperaPassword(body.alumno, false, false));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const recuperaEmailSend = (alumno) => {
  console.log(alumno);

  return async (dispatch) => {
    try {
      const resp = await fetchEmailSend('email', alumno, 'POST');
      const body = await resp.json();

      if (body.ok) {
        dispatch(recuperaSend(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const recuperaEmailSendFinish = () => (dispatch) => {
  dispatch(recuperaSend(false));
};
