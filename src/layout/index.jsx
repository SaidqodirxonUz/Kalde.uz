/* eslint-disable no-unused-vars */
// ** React Imports
import { useState, useEffect, useRef } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";

import AppMap from "../components/map";

const AppLayout = () => {
  const blueShade = "#0080ff";

  let initial = {
    latitude: 28.6448,
    longitude: 77.216721,
    zoom: 9,
    pitch: 0,
    antialias: true,
  };
  // const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [layerColor, setLayerColor] = useState(blueShade);
  const [count, setCount] = useState(100);
  const [newPlace, setNewPlace] = useState(null);
  const [polygonCord, setPolygonCord] = useState([]);
  let area = 250;
  const [viewport, setViewport] = useState(initial);

  const mapRef = useRef();

  // ** Hooks
  // const theme = useTheme();
  // const lgAbove = useMediaQuery(theme.breakpoints.up("lg"));

  // ** Vars
  // const leftSidebarWidth = 260;

  // const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen);

  function getLayerCord(bearing, initial_position) {
    const bearing_rad = (bearing * Math.PI) / 180;

    const distance = 5;
    const EARTH_RADIUS = 6378.137;
    const init_lat = (initial_position.latitude * Math.PI) / 180;
    const init_lon = (initial_position.longitude * Math.PI) / 180;

    const final_lat =
      (180 / Math.PI) *
      Math.asin(
        Math.sin(init_lat) * Math.cos(distance / EARTH_RADIUS) +
          Math.cos(init_lat) *
            Math.sin(distance / EARTH_RADIUS) *
            Math.cos(bearing_rad)
      );

    const final_lon =
      (180 / Math.PI) *
      (init_lon +
        Math.atan2(
          Math.sin(bearing_rad) *
            Math.sin(distance / EARTH_RADIUS) *
            Math.cos(init_lat),
          Math.cos(distance / EARTH_RADIUS) -
            Math.sin(init_lat) * Math.sin(final_lat)
        ));

    let finalCord = [];
    finalCord = [...finalCord, final_lon, final_lat];
    return finalCord;
  }

  function getAllCordinates() {
    const initial_position = {
      latitude: newPlace?.lat,
      longitude: newPlace?.lng,
    };

    let oneC = getLayerCord(45, initial_position);
    let twoC = getLayerCord(135, initial_position);
    let threeC = getLayerCord(225, initial_position);
    let fourC = getLayerCord(315, initial_position);
    setPolygonCord([oneC, twoC, threeC, fourC]);
  }

  useEffect(() => {
    if (newPlace) {
      getAllCordinates(area);
    }
  }, [newPlace]);

  console.log("polygonCord", polygonCord);

  return (
    <Box sx={{ height: "100%", zIndex: 999 }}>
      <AppMap
        mapRef={mapRef}
        count={count}
        layerColor={layerColor}
        polygonCord={polygonCord}
        setNewPlace={setNewPlace}
        newPlace={newPlace}
        viewport={viewport}
        setViewport={setViewport}
      />
    </Box>
  );
};

export default AppLayout;
