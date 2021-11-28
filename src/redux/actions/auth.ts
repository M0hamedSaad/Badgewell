import { IUser } from '../../interfaces';
import { showToast, BASE_URL } from '../../utils';
import { API } from '../../services/interceptor'
import { LOGIN_SUCCESS, LOGOUT, LOGIN_ATTEMPT } from '../types'

export const login = (data: IUser) => {
  return async (dispatch: any) => {
    dispatch({ type: LOGIN_ATTEMPT, user: null });
    try {
      const resp = await API.post(`${BASE_URL}/auth/login`, data);
      if (resp.data) {
        dispatch({ type: LOGIN_SUCCESS, user: resp.data });
      }
    }
    catch (err: any) {
      showToast('ERROR', err.response.data.message, 'error', true)
      dispatch({ type: LOGIN_SUCCESS, user: null });
    }
  };
};



export const logout = () => {
  return (dispatch: any) => {
    dispatch({
      type: LOGOUT,
      user: null
    });
  }
}