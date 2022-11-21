import axiosClient from "./axiosClient";
// api/orderApi.js
class OrderApi {
    getMyOrders = (id) => {
        const url = `/admin/order/customer/${id}`;
        return axiosClient.get(url);
    };

    getOrderDetail = (id)=>{
        const url = `/admin/order/${id}`;
        return axiosClient.get(url);
    };
}
const orderApi = new OrderApi();

export default orderApi;