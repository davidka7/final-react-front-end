import React, { useState } from "react";
import { connect } from 'react-redux';
import { topicer } from "../actions/userAction";

import '../App.css';


export const SaveFoward = ({saveder }) => {
    const [topic, setTopic] = useState('');
   
    const [user_id, setSaved] = useState('');
    const handleTopicChange = e => {
      setTopic(e.target.value);
    }
    
   

    const handleSavedChange = e => {
        setSaved(e.target.value);
      }


    const handleSubmit = e => {
      e.preventDefault();
      e.stopPropagation();
      saveder(topic, user_id);
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-center">Memory Box</legend>
                <div className="form-group row"></div>
                
                <div className="form-group">
                    <input
                      type="topic"
                      placeholder="topic ..."
                      onChange={handleTopicChange}
                      value={topic}
                    ></input>
                </div>
                
               
                <div className="form-group">
                    <input
                      type="user_id" 
                      placeholder="user_id ..."
                      onChange={handleSavedChange}
                      value={user_id}
                    ></input>
                </div>
                 
                
                <button type="submit" className="btn btn-primary radius-5px btn-block">Save Info</button>
            </fieldset>
        </form>
    )
}
export default connect(
   
    dispatch => ({saveder: (topic, user_id) => topicer(topic, user_id).then(dispatch)})
  )(SaveFoward);