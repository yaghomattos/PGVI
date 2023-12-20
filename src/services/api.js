import axios from 'axios';

const api = axios.create({
  baseURL: 'http://200.17.70.211:10165/',
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export default api;
