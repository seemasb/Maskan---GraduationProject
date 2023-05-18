import React, { useState,useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api";
import HomeCard from '../HomeCard.js/HomeCard'
import iconMarker from '../../Images/home.png'

const Map = ({homesCoordinates}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  // const [mapref, setMapRef] = useState(null);

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

  

/*  const markers = [
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
*/
  const markerOptions = {
    //  animation: window.google.maps.Animation.BOUNCE,
  };

  // const center = {
  //   lat: 37.7749,
  //   lng: -122.4194,
  // };
  useEffect(() => {
    if (homesCoordinates.length > 0) {
      const totalLat = homesCoordinates.reduce((sum, marker) => sum + marker.position.lat, 0);
      const totalLng = homesCoordinates.reduce((sum, marker) => sum + marker.position.lng, 0);
      const avgLat = totalLat / homesCoordinates.length;
      const avgLng = totalLng / homesCoordinates.length;
      setCenter({ lat: avgLat, lng: avgLng });
    }
  }, [homesCoordinates]);

  // const handleOnLoad = map => {
  //   setMapRef(map);
  // };
  // const handleCenterChanged = () => {
  //   if (mapref) {
  //     const newCenter = mapref.getCenter();
  //     console.log(newCenter.lat());
  //   }
  // };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        // onLoad={handleOnLoad}
        // onCenterChanged={handleCenterChanged}
        
      >
        {homesCoordinates&&homesCoordinates.map((marker, index) => (
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
            <HomeCard/>
          </InfoBox>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
