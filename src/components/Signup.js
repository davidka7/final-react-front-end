import React, { useState } from "react";
import { connect } from 'react-redux';
import { signup } from "../actions/userAction";
import '../containers/special.css'
import '../App.css';


export const Signup = ({ loginError, sign }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = e => {
      setUsername(e.target.value);
    }
    
    const handlePasswordChange = e => {
      setPassword(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }

    const handleSubmit = e => {
      e.preventDefault();
      e.stopPropagation();
      sign(username, password, email);
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <div className="special"> <legend className="text-center">Sign Up And Login To Your Account</legend></div>
                <div className="form-group row"></div>
                
                <div className="form-group">
                    <input
                      type="text"
                      placeholder="UserName ..."
                      onChange={handleUsernameChange}
                      value={username}
                    ></input>
                </div>
                
                <div className="form-group">
                    <input
                      type="password" 
                      placeholder="Password ..."
                      onChange={handlePasswordChange}
                      value={password}
                    ></input>
                </div>
                 
                <div className="form-group">
                    <input
                      type="email" 
                      placeholder="email ..."
                      onChange={handleEmailChange}
                      value={email}
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary radius-5px btn-block">Sign Up</button>
            </fieldset>
        </form>
    )
}
export default connect(
    store => ({loginError: store.userContext.error}),
    dispatch => ({sign: (username, password, email) => signup(username, password, email).then(dispatch)})
  )(Signup);