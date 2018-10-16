import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 33.7490, lng: -84.3880 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.7490, lng: -84.3880 }} />}
  </GoogleMap>
))

export default class Map extends Component {
  render() {
    return (
      <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC8Hop-AJho69QG-IOUFPjdyP8AFHoTsFk"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
  }
}
