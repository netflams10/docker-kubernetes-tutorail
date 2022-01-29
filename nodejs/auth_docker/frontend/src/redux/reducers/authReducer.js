import {AUTH_SUCCESS, GET_USER_DATA, SET_LOADING, RESET_LOADING} from '../types';




const initialState = {
    token: localStorage.getItem("@token"),
    isAuthenticated: false,
    user: null,
    loading: false,
}


export default (state=initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            localStorage.setItem("@token", action.payload.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        case GET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case RESET_LOADING:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}