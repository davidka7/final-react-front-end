
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getComment} from '../actions/commentAction'

import '../App.css';


// const youtubeEmbedLink = "https://www.youtube.com/embed/"
function Comment({getComment, commentz}) {
    useEffect(() => {
        getComment()
    }, [])

    return (
        <div>
        

        {console.log(commentz)}
           Hello Boys
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComment: () => getComment(dispatch),
    }
    }
    export default connect(store=>({commentz:store}), mapDispatchToProps)(Comment)