import mockProduct from '../../mock-api/products.json'
import mockApi from '../../mock-api/mock-products-api';
import * as actions from '../../constant/actionTypes';

export const getProduct = (pageIndex = 1, pageSize = 9) => {
    // console.log('data',mockApi.getProducts(pageIndex, pageSize))
    return {
        type: actions.GET_PRODUCTS,
        dataOfproducts: mockApi.getProducts(pageIndex, pageSize)
    }

}
const initialState = {
    products: []
}
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRODUCTS:
            // console.log('store data', state, action)
            // console.log('state', state)
            state.dataProducts = action.dataOfproducts
            return state
        default:
            return state
    }
}