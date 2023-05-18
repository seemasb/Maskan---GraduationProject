import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import imgae360 from '../Images/360.jpg'

class Panorama extends React.Component {


    render() {
        const config = {
            autoRotate: -2,
        };
        return (
            <div>
                <ReactPannellum
                    id="1"
                    sceneId="firstScene"
                    imageSource="https://res.insta360.com/static/49fcf323b6d04cb8f6a1a81fa6ec0436/3.jpg"
                    config={config}
                />
            </div>
        );
    }
}
export default Panorama;
