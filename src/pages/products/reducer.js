import mockApi from '../../mock-api/mock-products-api';
import * as Types from '../../constant/actionTypes';
import callApi from '../../util/apiCall';
import { dispatch } from 'rxjs/internal/observable/range';


// export const getProduct = (pageIndex = 1, pageSize = 9) => {
//     console.log('data', mockApi.getProducts(pageIndex, pageSize))
//     return {
//         type: actions.GET_PRODUCTS,
//         dataOfproducts: mockApi.getProducts(pageIndex, pageSize)
//     }

// }

// lấy dữ liệu sau khi gọi api lưu store
export const actGetProductsRequest = (pageIndex = 1, pageSize = 9) => {
        return (dispatch) => {
            return callApi('', 'GET', null).then(res => {
                dispatch(actGetProducts(res.data))
            })
        }
    }
    //gọi lên server lấy dữ liệu về
export const actGetProducts = (pageIndex = 1, pageSize = 9) => {
    return {
        type: Types.GET_PRODUCTS,
        dataOfproducts:
    }
}
const initialState = {}
export default function Reducer(state = initialState, action) {
    // a ko tim ra duoc thang nao return ve undefined, thoi thi khoi xu ly no
    if (action !== undefined) {
        switch (action.type) {
            case Types.GET_PRODUCTS:
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