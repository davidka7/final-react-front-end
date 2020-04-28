import React from "react";
import { connect } from "react-redux"
import Comment from "./Comment"

class Data extends React.Component {


    render() {
        return (
            <div className='row'>      
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Topic 1 </h5><br/><Comment /></div>
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Topic 2 </h5><br/><Comment /></div>
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Topic 3 </h5><br/><Comment /></div>
        </div>
           
        );
        
    }
}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(mapStateToProps)(Data)