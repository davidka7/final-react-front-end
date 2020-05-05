// import React, { useContext, useState, useEffect } from "react";
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getTopic, addTopic, deleteTopic} from '../actions/topicAction'
import { getComment} from '../actions/commentAction'


function Data({getTopic, toop, addTopic, deleteTopic, topicz}) {
    const [topic, setTopic] = useState('');
    const user_id = topicz.userContext.user.user.id;
    console.log(toop)
    const handleTopicChange = e => {
        setTopic(e.target.value);
      }
  
      const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
       addTopic(topic, user_id);
      }



const handleDelete = (id) => {
    deleteTopic(id);

}
//getter() {
//if (getTopic.data) { }
//}
console.log(toop.topic.topic, "hehe")

 //let comments= [].slice.call(toop.comment) 
 //var array = toop.comment
return (
<div>
{console.log(toop)}    
{console.log(toop.comment.comment)}
{console.log(toop.topic.topic)}
{/* {console.log(comments, "hehe")} */}


{toop.topic.topic.map(t=><li>{`${t.topic} ${toop.comment.comment.map(c=>c.saved_id===t.id ? (`Comments: ${c.comment}, Search Box: ${c.search};`) : (null))}`}{<button onClick={() => handleDelete(t.id)} type="submit">Delete</button>}</li>)}

   <form onSubmit={handleSubmit}>
       <input
       
       placeholder="Topic...."
                      onChange={handleTopicChange}
                      value={topic}>
                      </input>
                      
<button type="submit"> </button>
</form>

    </div>


)
}
const mapDispatchToProps = (dispatch) => {
   
return {
  
   
    addTopic: (topic, user_id) => {
        addTopic(topic, user_id).then(dispatch)
      
},  deleteTopic: (id) => deleteTopic(id, dispatch)
}}
export default connect(store=>({topicz:store}), mapDispatchToProps)(Data)