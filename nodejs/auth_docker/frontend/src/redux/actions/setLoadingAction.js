import {RESET_LOADING, SET_LOADING} from "../types";

export const setLoading = dispatch => {
    dispatch({
        type: SET_LOADING
    })
}

export const resetLoading = dispatch => {
    dispatch({
        type: RESET_LOADING
    })
}

