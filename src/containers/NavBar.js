import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/userAction';

const NavBar = ({user, signout}) => {
  
  return (
   
      
    <div className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarColor02">
  
          
    <ul className="navbar-nav mr-auto">
<div clasName="row">
    <div className="navbar">
      <li>
       <NavLink className="donty" to='/Account' 
        >Account                /</NavLink>
        </li>
        
        <li>
      <NavLink className="donty" to='/' 
        >Home                    /</NavLink>
     
    </li>
        <li>
                    { user ? <button className="radius-5px btn btn-danger" onClick={signout}>Sign out</button> : null }
                    </li>
              
      
    </div>
    </div>
 </ul>
 </div>
  );
};
export default connect(
  store => ({user: store.userContext.user}),
  (dispatch) => {
      return {
         
          signout: () => dispatch(logout())
      };
  }
)(NavBar)