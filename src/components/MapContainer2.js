import React from "react";
import { connect } from "react-redux"
import Map2 from './Map2'

//import { addComment} from '../actions/commentAction'

// function MapContainer2 ({latter, lngter}) {
    class MapContainer2 extends React.Component {
        render (){
      return (
        <div style={{ margin: '50px' }}>
      {/* {console.log(latter, lngter)} */}
      {console.log(this.props)}
       <Map2
       google = {this.props.google}
    
       center = {{lat: this.props.latter, lng: this.props.lngter}}
       height = '300px'
       zoom={10}
     
     />
     </div>
      );}
    
}
const mapStateToProps = state => {
    return {
        dataList: state
    }
}
export default connect(store=>({topicz:store}),mapStateToProps)(MapContainer2)
//this is where you will look through saved map and this holds map