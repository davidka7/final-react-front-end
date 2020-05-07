import React from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';
import './special.css'
const LoginPage = (props) => {

    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <Login />
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                    <Signup />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default LoginPage