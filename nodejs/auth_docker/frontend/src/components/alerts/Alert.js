import React, { useEffect, useState } from 'react'

// Connect and State
import { resetErrorMessage } from "../../redux/actions/errorAction";
import { connect } from 'react-redux'

const Alert = ({ message, error, resetErrorMessage }) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        if (error) setState("alert-error")
        if (message) setState("alert-message")

        setTimeout(() => {
            resetErrorMessage()
        }, 3000)
        // eslint-disable-next-line
    }, [error, message])

    return (
        <div className={`alert ${state}`}>
            <div className="alert-content">
                <div className="alert-header">
                    <h4>Alert Head</h4>
                </div>
                <div className="alert-body">Alert Body</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    message: state.error.message,
    error: state.error.error
})

export default connect(mapStateToProps, { resetErrorMessage }) (Alert)