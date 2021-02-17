import axios from 'axios';

export default class ProductsService {

    async getProducts(query: string) {
        try {
            let data = await axios.get(`https://mercado-libre-be.herokuapp.com/api/products/${query}`)
            if (data) {
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }

    async getProductDetail(id: string) {
        try {
            let data = await axios.get(`https://mercado-libre-be.herokuapp.com/api/products/description/${id}`)
            if (data) {
                return data.data
            }
        }
        catch (error) {
            throw error;
        }
    }

    async getCategory(category_id: string) {
        try {
            let data = await axios.get(`https://api.mercadolibre.com/categories/${category_id}`);
            if (data) {
                return data.data;
            }

        }
        catch (error) {
            throw error;
        }
    }
}