import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api";
import HomeCard from '../HomeCard.js/HomeCard'
import iconMarker from '../../Images/home.png'

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoBox = () => {
    setSelectedMarker(null);
  };

  const mapContainerStyle = {
    height: "100vh",
    width: "100%",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const markers = [
    {
      position: {
        lat: 37.7749,
        lng: -122.4194,
      },
      name: "San Francisco",
      info: "A beautiful city",
    },
    {
      position: {
        lat: 40.7128,
        lng: -74.006, 
      },
      name: "New York",
      info: "The Big Apple",
    },
  ];

  const markerOptions = {
    // animation: window.google.maps.Animation.BOUNCE,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
            options={markerOptions}
            icon={{
                url: iconMarker,
                // scaledSize: new window.google.maps.Size(50, 50) // set the size of the icon
              }}
          />
        ))}
        {selectedMarker && (
          <InfoBox
            position={selectedMarker.position}
            onCloseClick={handleCloseInfoBox}
          >
            {/* <div>
              <h1>{selectedMarker.name}</h1>
              <p>{selectedMarker.info}</p>
            </div> */}
            <HomeCard/>
          </InfoBox>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
