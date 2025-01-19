// src/axios.js

import axios from 'axios';

// Create an Axios instance with a base URL and some default configuration
const api = axios.create({
  baseURL: 'http://localhost:3000',  // Backend URL (change this if needed)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
