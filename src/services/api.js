import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default api;
