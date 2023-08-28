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

  return (
    //   mapboxAccessToken="pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdThkZTE1MTR4dzNkczJwYnVjc2plNSJ9.Yc8_3DMMA7l8CiY_tJY8iw"
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken="pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdThkZTE1MTR4dzNkczJwYnVjc2plNSJ9.Yc8_3DMMA7l8CiY_tJY8iw"
    >
      <Marker latitude={37.7577} longitude={-122.4376}>
        <div className="marker">Your Marker</div>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
