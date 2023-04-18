import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api";
import iconMarker from '../../Images/home.png'

const PropertyLocation = ({propertyDetails}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);


  const mapContainerStyle = {
    height: "50vh",
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
      }
    }
  ];

  const markerOptions = {
    // animation: window.google.maps.Animation.BOUNCE,
  };
  console.log(propertyDetails.location.data)
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={propertyDetails.location.data}
        zoom={10}
      >
        {/* {markers.map((marker, index) => ( */}
          <Marker
            position={propertyDetails.location.data}
            options={markerOptions}
            icon={{
                url: iconMarker,
                // scaledSize: new window.google.maps.Size(50, 50) // set the size of the icon
              }}
          />
        {/* ))} */}
      </GoogleMap>
    </LoadScript>
  );
};

export default PropertyLocation;
