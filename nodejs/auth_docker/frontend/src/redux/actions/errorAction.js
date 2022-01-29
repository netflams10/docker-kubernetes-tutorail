import {RESET_MESSAGE_ERROR, SET_ERROR, SET_MESSAGE} from "../types";

export const resetErrorMessage = () => dispatch => {
    dispatch({
        type: RESET_MESSAGE_ERROR
    })
}

export const setError = (data) => dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: data
    })
}

export const setMessage = (data) => dispatch => {
    dispatch({
        type: SET_MESSAGE,
        payload: data
    })
}