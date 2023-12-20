import axios from 'axios';

const api = axios.create({
  baseURL: 'https://11ab-186-233-35-170.ngrok-free.app/',
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export default api;
