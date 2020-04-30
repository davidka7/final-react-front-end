import React from "react";
import { connect } from "react-redux";

import '../App.css';


// const youtubeEmbedLink = "https://www.youtube.com/embed/"
const Comment = () => {
 

    return (
        <div>
           Hello Boys
        </div>

    )
}

const mapStateToProps = store => {
    return {
       
    }
};

export default connect(mapStateToProps)(Comment);