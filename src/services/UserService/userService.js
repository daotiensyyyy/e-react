import axios from "axios";
import domain from '../../config';

export const login = (data) => {
    return axios({
        url: `${domain.baseUrl}signin`,
        method: "POST",
        data: data,
    });
};

export const getAllUsers = () => {
    return axios({
        url: `${domain.adminUrl}all-users`,
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    });
}

export const getUserById = (value) => {
    return axios({
        url: `${domain.adminUrl}user/${value}`,
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem("accessToken"),
        },
    })
}