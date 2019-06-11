import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';

// function reducer(state, action) {
//     return 'State';
// }
const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/*
const action = {
    type: 'changState',
    payload: {
        newState: 'new state'
    }

};
store.dispatch(action);
*/
ReactDOM.render(
    <Provider store = { store } >
        <App />
    </Provider> ,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();