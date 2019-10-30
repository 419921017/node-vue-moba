import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001/admin/api/rest/'
});

export default http;
