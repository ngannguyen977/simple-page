import { combineReducers } from 'redux';
import AboutReducer from './../pages/about/reducer';
import ContactReducer from './../pages/contact/reducer';
import HomeReducer from './../pages/home/reducer';
import ProductReducer from './../pages/products/reducer';
import NotFoundReducer from './../pages/not-found/reducer';

const myReducer = combineReducers({

    AboutReducer,
    ContactReducer,
    HomeReducer,
    ProductReducer,
    NotFoundReducer

});
export default myReducer;