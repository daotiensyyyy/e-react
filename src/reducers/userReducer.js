import * as Types from '../app/types';

let data = JSON.parse(localStorage.getItem("user_login"));

let initialState = {
    credentials: data ? data : null,
    users: [],
    userDetails: null,
    accessToken: null,
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case Types.LOGIN:
            state.credentials = action.payload;
            return { ...state };
        case Types.LOGOUT:
            state.credentials = action.payload;
            return { ...state };
        case Types.ADMIN_GET_ALL_USERS:
            state.users = action.payload;
            return { ...state };
        case Types.ADMIN_GET_USER_BY_ID:
            state.userDetails = action.payload;
            return { ...state };

        default: return state
    }

}

export default userReducer;