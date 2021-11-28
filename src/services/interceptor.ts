import { store } from '../redux/store';
import axios from 'axios';
import { BASE_URL } from '../utils/config';
export const API = axios.create({
    baseURL: BASE_URL,
});
API.interceptors.request.use(
    config => {
        config.headers = {
            ...config.headers,
        };
        const state = store.getState();
        const token = state?.userState?.user?.token;
        console.log('INTERCEPTOR TOKEN ', token);
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export default API;