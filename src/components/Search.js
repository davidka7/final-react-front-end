import React from "react";
import { connect } from "react-redux"
import MapContainer from './MapContainer'

class Search extends React.Component {
 
    render() {

      return (
          
        <MapContainer
     
        />
          
      );
    }
}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(mapStateToProps) (Search)