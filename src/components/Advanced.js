import React from "react";
import { connect } from "react-redux"
import Map from './Map'
import MapContainer from './MapContainer'



class Advanced extends React.Component {

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
export default connect(mapStateToProps)(Advanced)