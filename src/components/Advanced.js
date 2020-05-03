import React from "react";
import { connect } from "react-redux"
import Map from './Map'
import MapContainer from './MapContainer'



class Advanced extends React.Component {

    render() {

      return (
        <div style={{ margin: '50px' }}>
       <Map
       google = {this.props.google}
       center = {{lat: 18.5204, lng: 73.8567}}
       height = '300px'
       zoom={10}
     
     />
     </div>
      );
    }
}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(mapStateToProps)(Advanced)