import axios from "axios";

axios.defaults.baseURL = 'https://alert-api.ornio.xyz/api/';
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const setupAxios = (store) => {
  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    const token = store.getState().user.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}

export default axios;