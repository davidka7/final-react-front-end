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
              {/* <Link to="/Advanced">Advanced Search and Save</Link> */}
            </li>
          </ul>
        </nav>

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
        
        {/* {   ((toop.topic) ? null :  <Advanced toop={toop}/>) } */}
        
      </div>
    </Router>
    <div id='hideMe'  >
            
    <BeatLoader size={1000} color="red" loading/>
    </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
   
    return {
        getComment: () => getComment(dispatch),
        getTopic: () => getTopic(dispatch)
     }}
    export default connect(store=>({toop:store}), mapDispatchToProps)(Account)