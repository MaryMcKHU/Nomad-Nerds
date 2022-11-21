// import React, { useState, useCallback} from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react'
import GoogleMapReact from 'google-map-react'
import pin from '../images/locationpin.png';



const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Map</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
      {console.log('mapping')}
    </div>
  </div>
)

const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={pin} height={30} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default Map;