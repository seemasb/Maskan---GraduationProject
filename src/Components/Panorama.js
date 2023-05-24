import React from 'react';
import ReactPannellum from 'react-pannellum';

const Panorama = ({ image, index }) => {
  console.log('img url:', image);


  const config = {
    autoRotate: -2,
    autoLoad: true,
    // type: 'multires',
  };

  return (
    <div>
      <ReactPannellum
        id={index}
        sceneId="firstScene"
        imageSource={image}
        config={config}
      />
    </div>
  );
};

export default Panorama;
