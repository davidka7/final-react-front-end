import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'

import '../App.css';


const Signup = () => {

    return (
        <form>
            <fieldset>
                <legend className="text-center">Don't have an account?</legend>
                <div className="form-group row"></div>

                <div className="form-group">
                    <input type="text" className="form-control radius-5px" id="exampleInputEmail1" placeholder="Username ..."></input>
                </div>
                
                <div className="form-group">
                    <input type="text" className="form-control radius-5px" id="exampleInputEmail1" placeholder="Full name ..."></input>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control radius-5px" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address ..."></input>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control radius-5px" id="exampleInputPassword1" placeholder="Password ..."></input>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control radius-5px" id="exampleInputPassword1" placeholder="Confirm password ..."></input>
                </div>
                
                <button type="submit" className="btn btn-primary radius-5px btn-block">Sign Up</button>
            </fieldset>
        </form>
    )
}

export default Signup;