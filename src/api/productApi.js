import axiosClient from "./axiosClient";
// api/productApi.js
class ProductApi {
    getAll = (params) => {
        const url = '/product/list';
        return axiosClient.get(url, { params });
    };
    getDetailProductById = (id) => {
        const url = `/product/details/${id}`;
        return axiosClient.get(url);
    };
}
const productApi = new ProductApi();

export default productApi;