import axios from 'axios';

const api = axios.create({
  baseURL: 'http://200.17.70.211:10165/',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default api;
