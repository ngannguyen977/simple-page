import * as types from './../constant/actionTypes';
// import mockData from './../mock-api/mock-data.json'
// import mockProduct from './../mock-api/product.json'
import mockApi from '../mock-api/mock-product-api'

export const getProduct = (pageIndex = 1, pageSize = 9) => {
    return {
        type: types.GET_PRODUCT,
        dataOfProduct: mockApi.getProducts(pageIndex, pageSize)

    }
}