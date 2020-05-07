// import React, { useContext, useState, useEffect } from "react";
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getTopic, addTopic, deleteTopic} from '../actions/topicAction'
import { getComment} from '../actions/commentAction'
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import MapContainer2 from './MapContainer2'
// or less ideally
// import $ from 'jquery';
// import Popper from 'popper.js';
function Data({getTopic, toop, addTopic, deleteTopic, topicz}) {
    const [topic, setTopic] = useState('');
    const user_id = topicz.userContext.user.user.id;
    const [mappy, setMappy] = useState("hi")
    console.log(toop)
    const handleTopicChange = e => {
        setTopic(e.target.value);
      }
      const handleMappyChange = e => {
        setMappy(e.target.value);
      }
      const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
       addTopic(topic, user_id);
      }
console.log(mappy)
// function mapper() {
// return (<div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
// </button>

// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div></div>)

// }

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
{/* {toop.topic.topic.map(t=><li>{
    
    
    }</li>)
} */}

{toop.topic.topic.map(t=><li>{t.topic}{toop.comment.comment.filter(c=>c.saved_id==t.id).map(x=><div>
    Comments: {x.comment}, SearchBox: {x.search}
    {console.log(x.id)}
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#Modal${x.id}`}>
  Launch Map
</button>

<div className="modal fade" id={`Modal${x.id}`} data-backdrop="false" tabIndex="-1" role="dialog" aria-labelledby={`Modal${x.id}Label`} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id={`Modal${x.id}Label`}>Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <MapContainer2 latter={x.lat} lngter={x.lng}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
    </div>
    </div>
    </div>



    
)



}{ <div > Delete Topic Officially<button onClick={() => handleDelete(t.id)} type="submit">Delete</button></div>}</li>)} 


 <div><h2> Create New Topic </h2></div>
   <form onSubmit={handleSubmit}>
       <input
       
       placeholder="Topic...."
                      onChange={handleTopicChange}
                      value={topic}>
                      </input>
                      
<Button bsPrefix="super-btn" variant="secondary" type="submit"> Submit</Button>
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