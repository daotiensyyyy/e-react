import * as Types from '../app/types';

const initialState = {
    products: [],
    productDetail: {},
    deleted: [],
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case Types.GET_PRODUCTS:
            state.products = action.payload;
            state.productDetail = null;
            return { ...state };

        case Types.GET_PRODUCT_BY_ID:
            state.productDetail = action.payload;
            return { ...state };

        case Types.ADMIN_GET_ALL_PRODUCTS:
            state.products = action.payload;
            return { ...state };

        case Types.ADMIN_GET_PRODUCT_BY_ID:
            state.productDetail = action.payload;
            return { ...state };

        case Types.ADMIN_EDIT_PRODUCT:
            state.productDetail = action.payload;
            return { ...state };

        case Types.ADMIN_RESTORE_PRODUCT:
            state.products.push(action.payload)
            state.deleted.splice(action.payload);
            return { ...state };

        case Types.ADMIN_GET_DELETED_PRODUCTS:
            state.deleted = action.payload;
            return { ...state };

        case Types.ADMIN_DELETE_PRODUCT:
            state.products.splice(action.payload);
            state.deleted.push(action.payload);
            return { ...state };

        case Types.ADMIN_CREATE_PRODUCT:
            state.products.push(action.payload);
            return { ...state };


        default: return state
    }

}

export default productReducer;