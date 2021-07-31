export const createAction = (type, payload) => {
    return { type: type, payload: payload };
};

export const createActionParams = (type, param_1, param_2) => {
    return {
        type: type,
        param_1: param_1,
        param_2: param_2,
    };
};