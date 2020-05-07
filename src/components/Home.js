import React, {useEffect, useState} from 'react'
import { connect } from "react-redux"
import '../App.css';
import Logo from "../papers.co-mm55-chicago-night-sky-city-blue-flare-40-wallpaper.jpg";
import Slider from "bootstrap-slider"
function Home ({}) {
   const handleClick = e => {
       setColor(e.target.value)
       if (e.target.value == 0){
     {document.body.style.backgroundImage = `url('${Logo}')`}
       }
    else if (e.target.value == 1) {
        {document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0.892) 0%, rgba(255, 255, 255, 0.892) 100%), url('${Logo}')`}
    }
    else if (e.target.value == 2) {
        {document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(205, 205, 205, 0.892) 0%, rgba(205, 205, 205, 0.892) 100%), url('${Logo}')`}
    }
    else if (e.target.value == 3) {
        {document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(143, 143, 143, 0.892) 0%, rgba(143, 143, 143, 0.892) 100%), url('${Logo}')`}
    }
    else if (e.target.value == 4) {
        {document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(82, 82, 82, 0.892) 0%, rgba(82, 82, 82, 0.892) 100%), url('${Logo}')`}
    }
else if (e.target.value == 5) {
    {document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(14, 14, 14, 0.892) 0%, rgba(14, 14, 14, 0.892) 100%), url('${Logo}')`}
}
    }
    const [color, setColor] =useState(1)
   

        return (
          <div>
          {/* {    alert(document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(58, 57, 57, 0.5) 0%, rgba(50, 48, 48, 0.5) 100%), url('papers.co-mm55-chicago-night-sky-city-blue-flare-40-wallpaper.jpg')") } */}
          <input type="range" min={0} max={5} value={color} onChange={handleClick}/>
             
            </div>
        );
  

}

const mapStateToProps = state => {
    return {
        dataList: state.data
    }
}
export default connect(mapStateToProps)(Home)