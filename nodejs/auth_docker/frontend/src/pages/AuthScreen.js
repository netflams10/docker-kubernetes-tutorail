import React, { useState, useEffect } from 'react'

// Avatar For Sign Up
import authImage from '../asssets/images/man.png';

// Compoenets
import Loading from "../components/state/Loading";

// Navigation
import { Navigate, useLocation, Redirect } from "react-router-dom"

// Connect && state
import { loginUser } from "../redux/actions/authAction";
import {setMessage} from "../redux/actions/errorAction";
import { connect } from 'react-redux'

const AuthScreen = ({ loginUser, setMessage, isAuthenticated, token, loading }) => {
    const location = useLocation();
    const [data, setData] = useState({email: "", password: ""})
    const [visible, setVisible] = useState(false)

    const {email, password} = data

    const onChange = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value})
    }

    const onSubmit = () => {
        if (email.length < 1 || password.length < 1) {
            // validate with an alert
            setMessage("Please Input all data");
            return ;
        }
        loginUser(data);
    }

    if (token || isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <div className="fill-screen d-flex d-flex-center">
            <div className="auth-container card d-block">
                <div className="image-container img">
                    <img src={authImage} alt="Auth Image..." className="auth-image" />
                </div>

                <div>
                    <input type="email" name="email" value={email} onChange={onChange} placeholder="E-mail" />
                </div>

                <div className="form-container">
                    <input type={visible ? "text" : "password"} name="password" value={password} onChange={onChange} placeholder="Password" />
                </div>

                <div className="form-container">
                    <button type="button" onClick={onSubmit}>{loading ? (<Loading />) : "Log In"}</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    isAuthenticated: true,
    token: state.auth.token
})

export default connect(mapStateToProps, { loginUser, setMessage }) (AuthScreen);