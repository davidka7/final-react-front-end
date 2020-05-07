import React, {useEffect, useState} from "react";
import Data from '../components/Data'
import Search from '../components/Search'
import LocationSearchInput from '../components/LocationSearchInput'
import {getTopic} from '../actions/topicAction'
import {getComment} from '../actions/commentAction'
import {connect} from 'react-redux'
import { BeatLoader} from 'react-spinners'
import RolePole from '../components/RolePole'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Account({getTopic, toop, getComment}) {
    
    useEffect(() => {
        getTopic()
    }, [])
    useEffect(() => {
        getComment()
    }, [])
  return (
    <div id='showMe'>
 
    <Router>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarColor02">
  
          
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/Data">Saved Info</Link>
      </li>
      <li className="nav-item">
      <Link to="/Search">Just Search Map</Link>
      </li>
      <li className="nav-item">
      <Link to="/Location">Just Search Map</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
        
        {/* {   ((toop.topic) ? null :  <Advanced toop={toop}/>) } */}
        
      </div>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/Data">Saved Info</Link>
            </li>
            <li>
              <Link to="/Search">Just Search Map</Link>
            </li>
            <li>
            <Link to="/Location">Just Search Map</Link>
               <Link to="/Advanced">Advanced Search and Save</Link> 
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Data">
            <Data toop={toop}/>
            </Route>
            <Route path="/Search">
            <Search toop={toop}/>
          </Route>
          <Route path="/Location">
        
          </Route>
          {/* <Route path="/Advanced"> */}
            
          {/* </Route> */}
        </Switch>
     
    </Router>
    {/* <div id='hideMe'  >
            
    <BeatLoader size={1000} color="red" loading/>
    </div> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
   
    return {
        getComment: () => getComment(dispatch),
        getTopic: () => getTopic(dispatch)
     }}
    export default connect(store=>({toop:store}), mapDispatchToProps)(Account)