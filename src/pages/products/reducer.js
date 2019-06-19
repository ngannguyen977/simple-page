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
export const actGetProductsRequest = (pageIndex = 1, pageSize = 10) => {
    console.log(`input có đúng ko vậy TÔ? page hiện tại = ${pageIndex},kích thước page = ${pageSize}`)

    return (dispatch) => {
        // let dataAfterPaging = []
        //gọi lên server lấy dữ liệu về
        callApi(API_URL, 'GET', null).then(res => {
            // xử lý phân trang ở client side cho object data
            const dataAfterPaging = res.data.data.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
            let totalPage = res.data.data.length/ pageSize
            console.log(`output có đúng ko TÔ? dataAfterPaging=${dataAfterPaging}`)
            console.log('dem gium coi co bao nhieu sp vay TO',res.data.data.length)
            dispatch(actGetProducts(dataAfterPaging,totalPage))

        })
    }

}

export const actGetProducts = (dulieu,totalPage) => {
    return {
        type: Types.GET_PRODUCTS,
        dataOfproducts: dulieu,
        totalPage: totalPage
    }
}
const initialState = []
export default function Reducer(state = initialState, action) {

    if (action !== undefined) {
        switch (action.type) {
            case Types.GET_PRODUCTS:
                // log kiemtra xem da co data trên store chưa
                // return state.dataProducts = action.dataOfproducts;
                return {...state, dataProducts: action.dataOfproducts,totalPage: action.totalPage }
            default:
                return state

        }
    }

    return state
}