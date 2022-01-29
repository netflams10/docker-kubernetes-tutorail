import {SET_ERROR, SET_MESSAGE, AUTH_FAIL, RESET_MESSAGE_ERROR} from "../types";

const initialState = {
    message: null,
    error: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                message: action.payload,
                error: null
            }
        case AUTH_FAIL:
            localStorage.removeItem("@token");
            return {
                ...state,
                message: null,
                error: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                message: null,
                error: action.payload
            }
        case RESET_MESSAGE_ERROR:
            return {
                message: null,
                error: null
            }
        default:
            return state
    }
}