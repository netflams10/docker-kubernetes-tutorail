import React, { useEffect } from 'react'

// State and Components
import { getAuthUser } from '../../redux/actions/authAction';
import { connect } from 'react-redux';

const NavBar = ({ user, getAuthUser }) => {
    useEffect(() => {
        getAuthUser()
        // eslint-disable-next-line
    }, [ getAuthUser ])

    return (
        <div>
            <h4>NavBar</h4>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getAuthUser }) (NavBar);