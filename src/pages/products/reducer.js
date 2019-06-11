import mockApi from '../../mock-api/mock-products-api';
import * as actions from '../../constant/actionTypes';
console.log(actions.GET_PRODUCTS, "action type px chua import dung nek")

export const getProduct = (pageIndex = 1, pageSize = 9) => {
    console.log('data', mockApi.getProducts(pageIndex, pageSize))
    return {
        type: actions.GET_PRODUCTS,
        dataOfproducts: mockApi.getProducts(pageIndex, pageSize)
    }

}
const initialState = {}
export default function Reducer(state = initialState, action) {
    // a ko tim ra duoc thang nao return ve undefined, thoi thi khoi xu ly no
    if (action !== undefined) {
        switch (action.type) {
            case actions.GET_PRODUCTS:
                // log kiemtra xem da co data trên store chưa
                console.log('state', state)
                return state.dataProducts = action.dataOfproducts;

                //return state
            default:
                return state
        }
    }
    return state
}