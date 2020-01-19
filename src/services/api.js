import axios from 'axios';

const api = axios.create({
  baseURL: "https://developer-maps-api.herokuapp.com",
});

export default api;
