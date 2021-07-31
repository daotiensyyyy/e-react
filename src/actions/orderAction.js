import { createAction } from "./createAction";
import * as Services from "../services/OrderService";
import * as Types from '../app/types';

export const actionPlaceOrderRequest = (value) => {
    return (dispatch) => {
        return Services.placeOrder(value)
            .then((result) => {
                dispatch(createAction(Types.PLACE_ORDER, result.data));
                localStorage.setItem("order", JSON.stringify(result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const actionGetOrderByCode = (value) => {
    return (dispatch) => {
        return Services.getOrderByCode(value)
            .then((result) => {
                dispatch(createAction(Types.GET_ORDER_BY_CODE, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
