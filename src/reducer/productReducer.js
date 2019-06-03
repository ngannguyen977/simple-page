import * as types from './../constant/actionTypes';

const initialState = {
    products: []
}
export default function productReducer(state = initialState, action) {
    switch (action.types) {
        case types.GET_PRODUCT:
            return {...state, dataProducts: action.dataOfProduct };
        default:
            return state;
    }
};