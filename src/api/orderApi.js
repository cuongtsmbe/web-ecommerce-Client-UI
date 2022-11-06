import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";
// api/orderApi.js
class OrderApi {
    getMyOrders = () => {
        const url = LINK.CLIENT.ORDER_GET_HISTORY ;
        return axiosClient.get(url);
    };

    getOrderDetail = (id)=>{
        const url = `${LINK.CLIENT.ORDER_GET_DETAILS}/${id}`;
        return axiosClient.get(url);
    };
    pay=(payMethod)=>{
        const url = LINK.CLIENT.ORDER_THANHTOAN;
        return axiosClient.post(url, payMethod);
    }
}
const orderApi = new OrderApi();

export default orderApi;