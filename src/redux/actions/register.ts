import { IUser } from '../../interfaces';
import { showToast, BASE_URL } from '../../utils';
import { API } from '../../services/interceptor'
import { SIGNUP_SUCCESS, SIGNUP_ATTEMPT } from '../types'

export const signUp = (data: IUser) => {
  return async (dispatch: any) => {
    dispatch({ type: SIGNUP_ATTEMPT });
    try {
      const resp = await API.post(`${BASE_URL}/auth/signup`, data);
      if (resp.data) {
        dispatch({ type: SIGNUP_SUCCESS, register: true });
      }
    }
    catch (err: any) {
      console.log({ err });
      console.log(err.response.data.message);
      showToast('ERROR', err.response.data.message, 'error', true)
      dispatch({ type: SIGNUP_SUCCESS, register: false });
    }
  };
};