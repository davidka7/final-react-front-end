import React from 'react';
import Advanced from '../components/Advanced';
import Search from '../components/Search';
import Data from '../components/Data';
const Account = (props) => {

    return (
            <div>
                <div className="col-2"></div>
                <Data className="col-10"/>
                <Search className="col-10"/>
                <Advanced className="col-10"/>
            </div>
    )
}

export default Account