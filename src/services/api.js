import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jeansflores/rocketshoes-api',
});

export default api;
