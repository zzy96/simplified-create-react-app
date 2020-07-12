import * as types from '../actionTypes'

const initialState = {
    message: "disconnected",
};

const systemReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.CONNECT:
            return {
                ...state,
                message: action.message,
            };
        case types.DISCONNECT:
            return {
                ...state,
                message: "disconnected",
            };
        default:
            return state
    }
};

export default systemReducer