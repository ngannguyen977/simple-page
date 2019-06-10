import mockProduct from '../../mock-api/products.json'
import mockApi from '../../mock-api/mock-products-api';
import * as actions from '../../constant/actionTypes';

export const getProduct = (pageIndex = 1, pageSize = 9) => {
    // console.log('data',mockApi.getProducts(pageIndex, pageSize))
    return {
        type: actions.GET_PRODUCTS,
        dataOfproducts: mockApi.getProducts()
    }

}
const initialState = {
}
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRODUCTS:
            // log kiemtra xem da co data trên store chưa
            console.log('state', state)
            return  state.dataProducts = action.dataOfproducts;

          //return state
        default:
            return state
    }
}