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
    "pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdWlod3kxMW43azNlcGVsZ3RueGw1diJ9.lny_o8gSKiN-MV7bkY-_bQ";

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
