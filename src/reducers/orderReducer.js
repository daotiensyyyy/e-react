import * as Types from '../app/types';

const initialState = {
    order: [],
    orderDetail: null,
}

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.PLACE_ORDER:
            state.order = action.payload;
            return { ...state };

        case Types.GET_ORDER_BY_CODE:
            state.orderDetail = action.payload;
            return { ...state };

        default: return state
    }

}

export default orderReducer;