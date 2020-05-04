import React, { useState, useEffect } from "react";
import { addComment} from '../actions/commentAction'
import Comment from './Comment'

// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";


// const mapStyles = {
//     width: '60%',
//     height: '60%',
//     margin: "auto"
//   };
export default function Map({toop}) {
    
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

 return (
     <div><Comment toop={toop}/></div>
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//       defaultOptions={{ styles: mapStyles }}
//     >
     
//         <Marker
        
//         />
    

//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
)
 }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// export default function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <MapWrapped
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?callback=createMap&libraries=places&key=AIzaSyBMLTtCd0Zd6s1diqDLxHzQC7RXvXZnz_s&callback=initMap`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }