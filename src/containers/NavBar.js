import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/userAction';

const NavBar = ({user, signout}) => {
  
  return (

    <div className="navbar">
       <NavLink className="donty" to='/Account' 
        >Account</NavLink>
      <NavLink className="donty" to='/' 
        >Home</NavLink>
        <li>
                    { user ? <button className="radius-5px btn btn-danger" onClick={signout}>Sign out</button> : null }
                    </li>
              
      
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