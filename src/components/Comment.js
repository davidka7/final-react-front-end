import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getComment} from '../actions/commentAction'



function Comment({getComment, topicz, toop}) {
    console.log(getComment)
useEffect(() => {
    getComment()
}, [])

//getter() {
//if (getTopic.data) { }
//}

console.log(toop)
return (

<div>

<div>"      hi             "</div>
  
    </div>


)
}
const mapDispatchToProps = (dispatch) => {
   
return {
    
    getComment: () => getComment(dispatch)
   }}
export default connect(store=>({commentz: store}), mapDispatchToProps)(Comment)