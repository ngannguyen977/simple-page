import * as Types from '../../constant/actionTypes';
import callApi from '../../util/apiCall';
import { API_URL } from '../../constant/config'

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
        let dataAfterPaging = []
            //gọi lên server lấy dữ liệu về
        callApi(API_URL, 'GET', null).then(res => {
            console.log('should run this 1', res)
                // xử lý phân trang ở client side cho object data
            dataAfterPaging = res.slice(pageIndex, pageIndex * pageSize)
            dispatch(actGetProducts(dataAfterPaging))
        })
    }
}

export const actGetProducts = (dulieu) => {
    return {
        type: Types.GET_PRODUCTS,
        dataOfproducts: dulieu
    }
}
const initialState = []
export default function Reducer(state = initialState, action) {

    if (action !== undefined) {
        switch (action.type) {
            case Types.GET_PRODUCTS:
                // log kiemtra xem da co data trên store chưa
                console.log('co data chua', state)
                return state.dataProducts = action.dataOfproducts;
            default:
                return state
        }
    }
    return state
}