import { BASE_URL } from '../../utils';
import { IContact } from '../../interfaces';
import { API } from '../../services/interceptor'
import { GET_CONTACTS_ATTEMPT, GET_CONTACTS_SUCCESS } from '../types'
let contacts: IContact[] = []

export const getContacts = (page: number) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_CONTACTS_ATTEMPT });
    try {
      const resp = await API.get(`${BASE_URL}/contacts?limit=15&page=${page}`);
      if (page == 1)
        contacts = resp.data.docs
      else
        contacts = [...contacts, ...resp.data.docs]

      dispatch({
        type: GET_CONTACTS_SUCCESS,
        contacts,
        totalPages: resp.data.totalPages
      });
      console.log({ contacts });

    }
    catch (err: any) {
      console.log(err);
    }
  };
};