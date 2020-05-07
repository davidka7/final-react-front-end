import React, {useEffect, useState} from 'react'
import { connect } from "react-redux"
import '../App.css';
import Logo from "../papers.co-mm55-chicago-night-sky-city-blue-flare-40-wallpaper.jpg";
function Home ({}) {
   const handleClick = () => {
     setColor(2)
     {document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(58, 57, 57, 0.5) 0%, rgba(50, 48, 48, 0.5) 100%), url('${Logo}')`}
    }
    const [color, setColor] =useState(1)

    
        return (
          <div>
          {/* {    alert(document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(58, 57, 57, 0.5) 0%, rgba(50, 48, 48, 0.5) 100%), url('papers.co-mm55-chicago-night-sky-city-blue-flare-40-wallpaper.jpg')") } */}
         
             <button onClick={handleClick}>Toggle:{color} </button>
            </div>
        );
  

}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(mapStateToProps)(Home)