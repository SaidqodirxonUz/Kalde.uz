/* eslint-disable no-unused-vars */
import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: "400px",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  const mapboxAccessToken =
    "pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdWlpYzl0MTRibjNnbnpzbTd5aXE5aiJ9.6MAIS-HG-samIv5iUBbq0g";

  // const mapboxBase64Token =
  //   "c2suZXlKMUlqb2liV1ZuWVdOdlpHVnlkWG9pTENKaElqb2lZMnhzZFdwcGNqQXdNV1J5Y0ROcWNIWndZbXBwT1dGc2RpSjkuR2toOG1IY0UwQTk1Nm9mRUNuaGdaUQ==";

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapboxAccessToken}
    >
      <Marker latitude={37.7577} longitude={-122.4376}>
        <div className="marker">Your Marker</div>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
