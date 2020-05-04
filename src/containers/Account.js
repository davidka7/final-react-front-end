import React, {useEffect, useState} from "react";
import Data from '../components/Data'
import Search from '../components/Search'
import Advanced from '../components/Advanced'
import {getTopic} from '../actions/topicAction'
import {getComment} from '../actions/commentAction'
import {connect} from 'react-redux'
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
          {/* <Route path="/Advanced"> */}
            
          {/* </Route> */}
        </Switch>
        <Advanced toop={toop}/>
      </div>
    </Router>
    
  );
}

const mapDispatchToProps = (dispatch) => {
   
    return {
        getComment: () => getComment(dispatch),
        getTopic: () => getTopic(dispatch)
     }}
    export default connect(store=>({toop:store}), mapDispatchToProps)(Account)