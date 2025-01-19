// src/axios.js

import axios from 'axios';

// Create an Axios instance with a base URL and some default configuration
const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // Backend URL (change this if needed)
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
