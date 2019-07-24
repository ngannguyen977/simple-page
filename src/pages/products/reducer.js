import * as Types from '../../constant/actionTypes';
import callApi from '../../util/apiCall';
import {  API_URL_PRODUCT_ID, BASE_URL,API_URL_PRODUCT_LIST} from '../../constant/config'

// lấy dữ liệu sau khi gọi api lưu store
export const actGetProductsRequest = (pageIndex = 0, pageSize = 10) => {
    console.log(`input có đúng ko vậy TÔ? page hiện tại = ${pageIndex},kích thước page = ${pageSize}`)

    return (dispatch) => {
        // let dataAfterPaging = []
        //gọi lên server lấy dữ liệu về
        callApi(`${API_URL_PRODUCT_LIST}?pageIndex=${pageIndex}&pageSize=${pageSize}`, 'GET', null).then(res => {
            // xử lý phân trang ở client side cho object data
            // const dataAfterPaging = res.data.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
            // let totalPage = res.data.data.length / pageSize
            console.log('url get product list co dung ko TO',`${BASE_URL}/${API_URL_PRODUCT_LIST}?pageIndex=${pageIndex}&pageSize=${pageSize}`)
            console.log(`output có đúng ko TÔ? dataAfterPaging=${res}`)
            console.log('dem gium coi co bao nhieu sp vay TO', res.total)
            dispatch(actGetProducts(res.data, res.total))

        })
    }

}
export const actGetProductByIdRequest = (id) => {
    return (dispatch) => {

        callApi(`${API_URL_PRODUCT_ID}?id=${id}`, 'GET', null).then(res => {
            console.log('data get product id nek TO',res)
            dispatch(actGetProductById(res.data))
        })
    }
}

export const actGetProducts = (dulieu, totalPage) => {
    return {
        type: Types.GET_PRODUCTS,
        dataOfproducts: dulieu,
        totalPage: totalPage
    }
}

export const actGetProductById = (dulieu) => {
    console.log('dulieu sau khi get product detail by id',dulieu)
    return {
        type: Types.GET_PRODUCT_ID,
        dataOfproductID: dulieu
    }
}

const initialState = []
export default function Reducer(state = initialState, action) {

    if (action !== undefined) {
        switch (action.type) {
            case Types.GET_PRODUCTS:
                // log kiemtra xem da co data trên store chưa
                // return state.dataProducts = action.dataOfproducts;
                return {...state, dataProducts: action.dataOfproducts, totalPage: action.totalPage }
            case Types.GET_PRODUCT_ID:
                console.log('action',action)
                return {...state, dataProductId: action.dataOfproductID }
            default:
                return state

        }
    }

    return state
}