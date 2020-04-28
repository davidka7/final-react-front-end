import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect } from "react-redux"
import '../App.css';
class Home extends React.Component {
   
    render() {
        return (
            <ul>
                {this.props.dataList.dataName}
            </ul>
        );
    }

}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(mapStateToProps)(Home)