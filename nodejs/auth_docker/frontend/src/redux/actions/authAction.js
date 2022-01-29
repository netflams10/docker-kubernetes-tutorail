import axios from 'axios';
import {AUTH_SUCCESS, GET_USER_DATA, SET_LOADING, SET_ERROR, SET_MESSAGE, AUTH_FAIL} from '../types';
import setHeader from "../../utility/setHeader";


import { setLoading, resetLoading } from './setLoadingAction';

setHeader()

export const loginUser = data => async dispatch => {
    setLoading(dispatch)
    try {
        const res = await axios.post('/api/auth/login', data);

        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        });
        dispatch({
            type: SET_MESSAGE,
            payload: res.data.message
        });
        await getAuthUser()
    } catch (err) {
        const { status } = err.response
        resetLoading(dispatch)
        dispatch({
            type: SET_ERROR,
            payload: status
        })
    }
}

export const getAuthUser = () => async dispatch => {
    setLoading(dispatch)
    try {
        const res = await axios.get(`/api/auth/user`);

        dispatch({
            type: GET_USER_DATA,
            payload: res.data
        })
    } catch (err) {
        const { status, data } = err.response
        resetLoading(dispatch)
        dispatch({
            type: AUTH_FAIL,
            payload: status
        })
    }
}
