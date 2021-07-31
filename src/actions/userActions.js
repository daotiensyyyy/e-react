import { createAction } from "./createAction";
// import { login } from "../services/userService";
import * as Services from "../services/UserService";
import * as Types from '../app/types';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (notify) => {
    switch (notify) {
        case "LOGIN_SUCCESS": {
            return toast.success("Login successful!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "LOGIN_FAILED": {
            return toast.error("Login failed!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        case "LOGOUT": {
            return toast.error("Logout!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                pauseOnHover: false,
            });
        }

        default: { }
    }
};

export const actionLoginRequest = (values) => {
    return (dispatch) => {
        return Services.login(values)
            .then((result) => {
                dispatch(createAction(Types.LOGIN, result.data));
                // console.log('data', result.data);
                if (result.data) {
                    localStorage.setItem("user_login", JSON.stringify(result.data));
                    localStorage.setItem("accessToken", result.data.accessToken);

                    notify("LOGIN_SUCCESS");
                }
                // }
                // console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const actionLogoutRequest = () => {
    return (dispatch) => {
        localStorage.removeItem('user_login');
        localStorage.removeItem('accessToken');
        dispatch(createAction(Types.LOGOUT));
        notify("LOGOUT");

    };
};

export const actionFetchAllUsers = () => {
    return (dispatch) => {
        return Services.getAllUsers()
            .then((result) => {
                dispatch(createAction(Types.ADMIN_GET_ALL_USERS, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export const actionFetchUserById = (value) => {

    return (dispatch) => {
        return Services.getUserById(value)
            .then((result) => {
                dispatch(createAction(Types.ADMIN_GET_USER_BY_ID, result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

}