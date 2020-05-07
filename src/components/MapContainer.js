import React from "react";
import { connect } from "react-redux"
import Map from './Map'
import './Map.css'
//import { addComment} from '../actions/commentAction'
import '../containers/special.css'

class MapContainer extends React.Component {

    render() {
console.log(this.props.topicz)
      return (
        <div style={{ margin: '50px' }}>
          
            {console.log(this.props)}
            <div id="slide-rotate-hor-b-fwd">
       <Map
       google = {this.props.google}
       center = {{lat: 18.5204, lng: 73.8567}}
       height = '300px'
       zoom={10}
     
     />
     </div>
     </div>
      );
    }
}

const mapStateToProps = state => {
    return {
        dataList: state
    }
}
export default connect(store=>({topicz:store}),mapStateToProps)(MapContainer)