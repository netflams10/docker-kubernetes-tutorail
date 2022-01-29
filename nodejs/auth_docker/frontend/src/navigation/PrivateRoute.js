import React from "react"

// Routes
import { Navigate, useLocation } from "react-router-dom"

// Auth Management
import { connect } from 'react-redux'


const PrivateRoute = ({ children ,isAuthenticated, token }) => {
    console.log(children)
    // const location = useLocation()
    return isAuthenticated || token ? (children) : (<Navigate to="login" />)
}

const mapStateToProps= state => ({
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, {  }) (PrivateRoute)