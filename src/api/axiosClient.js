// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import userApi from "./userApi";


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
    customHeaders.Authorization = 'Bearer ' + accessToken;
  }

  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
})
function createAxiosResponseInterceptor() {
 const interceptor =  axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  }, (error) => {
    // Handle errors
    // Reject promise if usual error
    if (error.response.status !== 400 && error.response.status !== 401) {
      return Promise.reject(error);
    }
    /*
            * When response code is 401, try to refresh the token.
            * Eject the interceptor so it doesn't loop in case
            * token refresh causes the 401 response.
            *
            * Must be re-attached later on or the token refresh will only happen once
            */
    axios.interceptors.response.eject(interceptor);
    return userApi.refreshToken({user:{ refreshToken: localStorage.getItem('refreshToken') }}).then((response) => {
      // Save access token
      localStorage.setItem('token', response.AccessToken);
      error.response.config.headers["Authorization"] = "Bearer " + response.AccessToken;
      // Retry the initial call, but with the updated token in the headers. 
      // Resolves the promise if successful  
      // this.router.push('/')    ;
      return axios(error.response.config);
    })
      .catch((error2) => {
        // Retry failed, clean up and reject the promise
        // destroyToken();
        // localStorage.removeItem('token');
        // localStorage.removeItem('authenticated');
        // this.router.push("/signin");
        return Promise.reject(error2);
      })
      .finally(createAxiosResponseInterceptor);
    // throw error;
  });
}
createAxiosResponseInterceptor(); // Execute the method once during start


export default axiosClient;
// Expired Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsInVzZXJuYW1lIjoidGVzdDEyNDNyZWZkIiwidXNlcl9wZXJtaXNzaW9uIjp0cnVlLCJ1c2VyX3R5cGUiOiJDVVNUT01FUiIsImlhdCI6MTY2NzY3NTI3NiwiZXhwIjoxNjY3Njc4ODc2fQ.iWU8fZQ0mWWvfEJf3z_nAfy4Y1FezfatxmijhG9NLSk