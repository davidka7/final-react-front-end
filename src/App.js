import React, { useReducer} from 'react';
import { connect } from "react-redux"
import './App.css';
import Home from './components/Home'
//import { initialState, reducer } from './redux/dataReducer'
import NavBar from './containers/NavBar';
import LoginPage from './containers/LoginPage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Account from './containers/Account';
//export const TopicContext = React.createContext()
//import {useSelector, useDispatch}from 'react-redux'



const App = ({ user }) => {
  //const [topics, dispatch] = useReducer(reducer, initialState)
  console.log(user)
  return (
    //<TopicContext.Provider value={{ topicState: topics, topicDispatch: dispatch}}>
      <Router>
        <NavBar />
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route
          exact
          path="/account" 
          render={(routeProps) => 
            
              user ? <Account {...routeProps} />
               : <Redirect to={{pathname: '/login', state: { from: routeProps.location }}} />}
          />
        <Route
          exact 
          path='/login' 
          render={(routeProps) =>
              user ? <Redirect to={{pathname: '/account'}} /> : <LoginPage {...routeProps} />} />
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
     
      </Router>
     // </TopicContext.Provider>
  );
}

const mapStatetoProp = (store) => {
  console.log("mapSate", store)
  return {user: store.userContext.user}
}
console.log(mapStatetoProp)
export default connect(mapStatetoProp)(App);


//  <h1> Data : {data.map( obj=> {obj.dataName})}</h1>
 // <button onClick={(()=> dispatch({type:"ADD_DATA"}))}>Add Hehe</button>
 // <button onClick={(()=> dispatch({type:"just_data"}))}>just jane</button>