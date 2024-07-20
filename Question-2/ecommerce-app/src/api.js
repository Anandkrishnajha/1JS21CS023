import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

const getProducts = (company, category, top, minPrice, maxPrice) => {
    return axios.get(${BASE_URL}/companies/${company}/categories/${category}/products, {
        params: { top, minPrice, maxPrice }
    });
};

export { getProducts };