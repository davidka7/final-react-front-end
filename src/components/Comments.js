import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/commentAction'
import Button from 'react-bootstrap/Button';
import '../containers/special.css'
// or less ideally

function Comments({addComment, city, area, state, address, lat, lng, commentz}) {
console.log(city, area, state, address, lat, lng)
// const [comment, setComment] = useState('');
// const [search, setSearch] = useState('');
const [saved_id, setSaved_id] = useState('');
    // console.log(toop)
    // const handleCommentChange = e => {
    //     setComment(e.target.value);
    //   }
    //   const handleSearchChange = e => {
    //     setSearch(e.target.value);
    //   }
      const handleSaved_idChange = e => {
        setSaved_id(e.target.value);
      }
      const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log('hey')
        console.log(`${city},${area},${state},${address}`, `${address}`, lat, lng, saved_id)
       addComment(`${city},${area},${state},${address}`, `${address}`, lat, lng, saved_id);
      }
//getter() {
//if (getTopic.data) { }
//}

//console.log(toop)
function fixer(){
    console.log(city)
if (city) {
return  <div className="special">
Add A saved Location to Your existing Topics<form onSubmit={handleSubmit}>
{/* <input
placeholder="Comment...."
               onChange={handleCommentChange}
               value={comment}>
               </input>
               <input
placeholder="Search...."
               onChange={handleSearchChange}
               value={search}>
               </input> */}
            {commentz.topic.topic.map(t=>
             <div className="special">
               <input 
               id={t.id}
               type="radio"  
               checked={((!saved_id) ? null : ((saved_id == t.id) ? true : false  )) } 
               onChange={handleSaved_idChange}
               value={t.id}
               label={t.topic} /> 
              {t.topic}</div>
               )}
                    

<Button bsPrefix="super-btn" variant="secondary" type="submit"> Submit</Button>
</form> </div>

}
    }

return (
<div>
{fixer()}
    </div>
)
}
const mapDispatchToProps = (dispatch) => {
return {
   addComment: (comment, search, lat, lng, saved_id) => {
        addComment(comment, search, lat, lng, saved_id).then(dispatch)
}
   }}
export default connect(store=>({commentz: store}), mapDispatchToProps)(Comments)