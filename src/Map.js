import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 30.7333, lng: 76.7794 }}>
        <Marker position={{ lat: 30.7333, lng:76.7794}} />
      </GoogleMap>
    ))
  );

  const API_KEY = process.env.REACT_APP_MAP_API_KEY;

  return (
    <div>
      <MapWithAMarker
        googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
        containerElement={<div style={{ height: `400px`,width: '80%', margin:'auto' }} />}
        mapElement={<div style={{ height: `100%`,width: '100%' }} />}
      />
    </div>
  );
}

export default Map;
