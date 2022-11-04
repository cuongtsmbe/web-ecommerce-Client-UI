// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";


// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
  origin: true,
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',       
    },
    withCredentials: true,
    paramsSerializer: params => queryString.stringify(params),    
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const customHeaders = {};

  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    customHeaders.Authorization ='Bearer ' + accessToken;
  }

  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;