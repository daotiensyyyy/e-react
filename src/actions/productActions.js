import * as Types from '../app/types';
import * as Services from '../services/ProductService';
import { createAction } from './createAction';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (notify) => {
    switch (notify) {
        case "EIDT_PRODUCT_SUCCESS": {
            return toast.success("Product has been updated!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "RESTORE_PRODUCT_SUCCESS": {
            return toast.success("Product has been restored!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "DELETE_PRODUCT_SUCCESS": {
            return toast.success("Product has been deleted!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "EIDT_PRODUCT_FAILED": {
            return toast.error("Update failed!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "RESTORE_PRODUCT_FAILED": {
            return toast.error("Restore failed!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "DELETE_PRODUCT_FAILED": {
            return toast.error("Delete failed!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        default: { }
    }
};

export const actionFetchAllProducts = () => {

    return (dispatch) => {
        return Services.getAllProducts()
            .then((result) => {
                dispatch(createAction(Types.GET_PRODUCTS, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

}

export const actionFetchProductById = (value) => {

    return (dispatch) => {
        return Services.getProductById(value)
            .then((result) => {
                dispatch(createAction(Types.GET_PRODUCT_BY_ID, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

}

export const actionAdminFetchAllProducts = () => {

    return (dispatch) => {
        return Services.adminGetAllProducts()
            .then((result) => {
                dispatch(createAction(Types.ADMIN_GET_ALL_PRODUCTS, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

}

export const actionAdminFetchProductById = (value) => {

    return (dispatch) => {
        return Services.adminGetProductById(value)
            .then((result) => {
                dispatch(createAction(Types.ADMIN_GET_PRODUCT_BY_ID, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

}

export const actionAdminEditProduct = (id, value) => {

    return (dispatch) => {
        return Services.adminEditProduct(id, value)
            .then((result) => {
                dispatch(createAction(Types.ADMIN_EDIT_PRODUCT, result.data));
                notify("EDIT_PRODUCT_SUCCESS");
            })
            .catch((err) => {
                console.log(err);
                notify("EDIT_PRODUCT_FAILED");
            });
    };

}

export const actionAdminRestoreProduct = (value) => {

    return (dispatch) => {
        return Services.adminRestoreProduct(value)
            .then((result) => {
                dispatch(createAction(Types.ADMIN_RESTORE_PRODUCT, result.data));
                notify("RESTORE_PRODUCT_SUCCESS");
            })
            .catch((err) => {
                console.log(err);
                notify("RESTORE_PRODUCT_FAILED");
            });
    };

}

export const actionAdminFetchDeletedProducts = () => {

    return (dispatch) => {
        return Services.adminGetDeletedProducts()
            .then((result) => {
                dispatch(createAction(Types.ADMIN_GET_DELETED_PRODUCTS, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

}

export const actionAdminDeleteProduct = (value) => {

    return (dispatch) => {
        return Services.adminDeleteProduct(value)
            .then((result) => {
                dispatch(createAction(Types.ADMIN_DELETE_PRODUCT, result.data));
                notify("DELETE_PRODUCT_SUCCESS");
            })
            .catch((err) => {
                console.log(err);
                notify("DELETE_PRODUCT_FAILED");
            });
    };

}