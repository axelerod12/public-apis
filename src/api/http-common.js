import axios from 'axios';

// Set a baseURL for convenience
const baseURL = process.env.VUE_APP_API_URL || 'https://api.publicapis.org';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL,
});

export default instance;
