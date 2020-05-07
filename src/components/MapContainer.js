import React from "react";
import { connect } from "react-redux"
import Map from './Map'

//import { addComment} from '../actions/commentAction'


class MapContainer extends React.Component {

    render() {
console.log(this.props.topicz)
      return (
        <div style={{ margin: '50px' }}>
          
            {console.log(this.props)}
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
        dataList: state
    }
}
export default connect(store=>({topicz:store}),mapStateToProps)(MapContainer)