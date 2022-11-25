import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";
// api/userApi.js
class UserApi {
    register = (params) => {
        const url = LINK.CLIENT.AUTHENTICATE_REGISTER_LOCAL;
        return axiosClient.post(url, params);
    };
    signIn = (params) => {
        const url = LINK.CLIENT.AUTHENTICATE_LOGIN_LOCAL;
        return axiosClient.post(url, params)
    }
    getProfile = (params) => {
        const url = LINK.CLIENT.CUSTOMER_GET_INFO;
        return axiosClient.get(url, params)
    }
    refreshToken = (params) => {
        const url = LINK.CLIENT.AUTHENTICATE_REFRESHTOKEN;
        return axiosClient.post(url, params)
    }
    updateInfo = (params) => {
        const url = LINK.CLIENT.CUSTOMER_EDIT_INFO;
        return axiosClient.put(url, params);
    }
    resetPassword = (params) => {
        const url = LINK.CLIENT.AUTHENTICATE_FORGET_PW;
        return axiosClient.post(url, params)
    }
    updatePassword = (params, token) => {
        const url = LINK.CLIENT.AUTHENTICATE_UPDATE_PW;
        return axiosClient.post(url, params, { headers: { 'Authorization': 'Bearer ' + token } });
    }
    loginGoogle = (params) => {
        const url = `${process.env.REACT_APP_API_URL}/auth/google/success`;
        return axiosClient.get(url, params);
    };
    lohoutGoogle =(params) =>{
        const url =`${process.env.REACT_APP_API_URL}/auth/google/logout`;
        return axiosClient.get(url, params);
    }
}
const userApi = new UserApi();

export default userApi;