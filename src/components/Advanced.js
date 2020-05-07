import React from "react";
import { connect } from "react-redux"

import MapContainer from './MapContainer'
import { addComment} from '../actions/commentAction'
import Comment from './Comment'
import '../containers/special.css'
function Advanced({topicz, toop}) {

   
console.log(toop)
      return (
         <div> 
       <MapContainer/>
      </div>
      );
    
}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(store=>({topicz:store}),mapStateToProps)(Advanced)