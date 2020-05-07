import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import React, {useEffect, useState} from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
// import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";



function Map({mappat, mappnt}) {
  
    const [mapat, setMapat] = useState('')
    const [mapng, setMapng] = useState('')
  
    if (mappat !== mapat) {
  
        setMapat(mappat);
        setMapng(mappnt);
      

   }
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }

//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);
console.log(mapat, mapng)
  return (
  
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: mapat, lng: mapng }}
      defaultOptions={{ styles: mapStyles }}
    />
    
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function RolePole({mappat,mappnt}) {




  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
      mappat={mappat}
      mappnt={mappnt}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBMLTtCd0Zd6s1diqDLxHzQC7RXvXZnz_s`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <input></input>
    </div>
  );
}