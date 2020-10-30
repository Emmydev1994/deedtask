import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
});

api.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error.response);
    },
);

export default api;