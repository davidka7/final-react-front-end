import React, {Component } from 'react';
import { connect } from "react-redux"
import Comment from "./Comment"
import { getTopic } from '../actions/userAction';
import SaveFoward from './SaveFoward'
import ReactDOM from 'react-dom';
import '../App.css';

    export class Data extends Component {
        componentDidMount(){
            this.props.onFetchSaveds();
        }
        render () {
        return (
           
    
            
            <div className='row'> 
            hehe
    <div className="block">main

</div>
            <SaveFoward/>  
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Topic 1 </h5><br/><Comment /></div>
         
         
        </div>
           
        );
        }
}
const mapDispacthToProps = (dispatch) => {
return {
onFetchSaveds:()=> getTopic(dispatch)

}
    

}

const mapStateToProps = (store) => {
    console.log(store.topics)
    return {
       topics: store
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(Data)