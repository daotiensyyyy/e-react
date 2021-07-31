import axios from "axios";
import domain from '../../config';

export const placeOrder = (data) => {
    return axios({
        url: `${domain.baseUrl}create-order`,
        method: "POST",
        data: data,
    });
};

export const getOrderByCode = (data) => {
    return axios({
        url: `${domain.baseUrl}order-list`,
        method: "POST",
        data: data,
    })
}