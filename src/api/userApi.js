import axiosClient from "./axiosClient";
// api/userApi.js
class UserApi {
    register = (params) => {
        const url = '/authenticate/register/local';
        return axiosClient.post(url, { params });
    };
}
const userApi = new UserApi();

export default userApi;