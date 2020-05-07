import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/commentAction'
import Button from 'react-bootstrap/Button';

// or less ideally



function Comment({ topicz, toop, addComment, commentz}) {
console.log(commentz)
console.log(topicz)


const [comment, setComment] = useState('');
const [search, setSearch] = useState('');
const [saved_id, setSaved_id] = useState('');
    
    // console.log(toop)
    const handleCommentChange = e => {
        setComment(e.target.value);
      }
      const handleSearchChange = e => {
        setSearch(e.target.value);
      }
      const handleSaved_idChange = e => {
        setSaved_id(e.target.value);
      }
      const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
       addComment(comment, search, saved_id);
      }
//getter() {
//if (getTopic.data) { }
//}

//console.log(toop)

return (

<div>

<div>"      hi             "</div>

<form onSubmit={handleSubmit}>
       <input
       placeholder="Comment...."
                      onChange={handleCommentChange}
                      value={comment}>
                      </input>
                      <input
       placeholder="Search...."
                      onChange={handleSearchChange}
                      value={search}>
                      </input>
                      {/* {console.log(toop, "toop")} */}
                      {/* {console.log(toop.topic, "newhehe")} */}
                      {/* {console.log(toop.topic.topic, "topic.topic")} */}
                      {/* {console.log(topics, "topics")} */}
{toop.topic.topic.map(t=><li>{console.log(t)}{`${t.topic} and id ${t.id}`}</li>)}

                      <input
       placeholder="topics id...."
                      onChange={handleSaved_idChange}
                      value={saved_id}>
                      </input>

<Button bsPrefix="super-btn" variant="secondary" type="submit"> Submit </Button>
</form> 
    </div>


)
}
const mapDispatchToProps = (dispatch) => {
   
return {
    
   addComment: (comment, search, saved_id) => {
        addComment(comment, search, saved_id).then(dispatch)
      
}
   }}
export default connect(store=>({commentz: store}), mapDispatchToProps)(Comment)