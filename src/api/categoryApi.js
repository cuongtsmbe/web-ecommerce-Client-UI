import axiosClient from "./axiosClient";
// api/categoryApi.js
class CategoryApi {
    getAll = (params) => {
        const url = '/admin/category/list';
        return axiosClient.get(url, { params });
    };
}
const categoryApi = new CategoryApi();

export default categoryApi;