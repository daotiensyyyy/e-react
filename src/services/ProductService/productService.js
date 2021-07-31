import axios from "axios";
import domain from '../../config';

export const getAllProducts = () => {
    return axios({
        url: `${domain.baseUrl}all-products`,
        method: "GET",
    });
};

export const getProductById = (value) => {
    return axios({
        url: `${domain.baseUrl}product/${value}`,
        method: "GET",
    })
}

export const adminGetAllProducts = () => {
    return axios({
        url: `${domain.adminUrl}all-products`,
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    });
};

export const adminGetProductById = (value) => {
    return axios({
        url: `${domain.adminUrl}product/${value}`,
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    })
}

export const adminEditProduct = (value, data) => {
    return axios({
        url: `${domain.adminUrl}product/${value}/edit`,
        method: "PUT",
        data: data,
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    })
}

export const adminRestoreProduct = (value) => {
    return axios({
        url: `${domain.adminUrl}trash/product/${value}/restore`,
        method: "PATCH",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    })
}

export const adminGetDeletedProducts = () => {
    return axios({
        url: `${domain.adminUrl}trash/products`,
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    });
};

export const adminDeleteProduct = (value) => {
    return axios({
        url: `${domain.adminUrl}product/${value}/delete`,
        method: "DELETE",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    })
}