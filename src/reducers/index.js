import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

export default combineReducers({
    productList: productReducer,
    userList: userReducer,
    orderList: orderReducer
});