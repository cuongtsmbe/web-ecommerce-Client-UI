import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";
// api/productApi.js
class ProductApi {
    getAll = (params) => {
        const url = LINK.CLIENT.PRODUCT_GET_LIST;
        return axiosClient.get(url, { params });
    };
    getDetailProductById = (id) => {
        const url = `${LINK.CLIENT.PRODUCT_GET_DETAILS}/${id}`;
        return axiosClient.get(url);
    };
    getTop10Saler = (params) => {
<<<<<<< HEAD
        const url = `/product/topsale/10`;
=======
        const url = `${LINK.CLIENT.PRODUCT_GET_LIST_TOPSALE_MOST}/10`;
        return axiosClient.get(url, { params });
    }
    getProductRelevant = (idCategory, idProduct, params) => {
        const url = `${LINK.CLIENT.PRODUCT_GET_LIST_RELEVANT}/${idCategory}/${idProduct}/4`;
>>>>>>> 50ffe0e8eba3eec655f3b76333ce54a1de50d13d
        return axiosClient.get(url, { params });
    }
}
const productApi = new ProductApi();

export default productApi;