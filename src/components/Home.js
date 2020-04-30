import React from "react";

import { connect } from "react-redux"
import '../App.css';
class Home extends React.Component {
   
    render() {
        return (
            <ul>
                Hello
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