import axiosClient from "./axiosClient";
// api/orderApi.js
class OrderApi {
    getAll = (params) => {
        const url = '/orders';
        return axiosClient.get(url, { params });
    };
    getAll = (params) => {
        const url = '/orders';
        return axiosClient.get(url, { params });
    };
    getAll = (params) => {
        const url = '/orders';
        return axiosClient.get(url, { params });
    };
}
const orderApi = new OrderApi();

export default orderApi;