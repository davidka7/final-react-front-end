import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/commentAction'



function Comment({ topicz, toop, addComment, commentz}) {


const [comment, setComment] = useState('');
const [search, setSearch] = useState('');
const [saved_id, setSaved_id] = useState('');
    
    console.log(toop)
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

console.log(toop)

let topics= [].slice.call(toop.topic)
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
                    
                      {console.log(toop.topic[0], "newhehe")}
                {console.log(topics), "hoho"}
{topics.map(t=><li>{console.log(t)}{`${t.topic} and id ${t.id}`}</li>)}

                      <input
       placeholder="topics id...."
                      onChange={handleSaved_idChange}
                      value={saved_id}>
                      </input>

<button type="submit"> </button>
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