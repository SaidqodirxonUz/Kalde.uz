/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Map from "react-map-gl";

const mapboxAccessToken =
  "pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdWlpYzl0MTRibjNnbnpzbTd5aXE5aiJ9.6MAIS-HG-samIv5iUBbq0g";
export default function Maps(props) {
  console.log(props.url);
  var URL = props.url;
  var splitUrl = URL.split("!3d");
  var latLong = splitUrl[splitUrl.length - 1].split("!4d");
  var longitude;

  if (latLong.indexOf("?") !== -1) {
    longitude = latLong[1].split("\\?")[0];
  } else {
    longitude = latLong[1];
  }
  var latitude = latLong[0];

  const text = longitude;
  const regex = /(\d+\.\d+)!/; // Matches a float number before "!"

  const match = text.match(regex);

  if (match) {
    const numberBeforeExclamation = match[1];
    longitude = numberBeforeExclamation;
    console.log(numberBeforeExclamation); // Output: 69.2999526
  } else {
    console.log("No match found!");
  }
  let zoom = 15;
  // let obj = {
  //   longitude,
  //   latitude,
  //   zoom,
  // };
  console.log("lat", latitude); //64.751111
  console.log("lon", longitude); //-147.3494442
  return (
    // ={{
    //   longitude: { longitude },
    //   latitude: { latitude },
    //   zoom: "15",
    // }}
    <Map
      mapLib={import("mapbox-gl")}
      mapboxAccessToken="pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdWlpYzl0MTRibjNnbnpzbTd5aXE5aiJ9.6MAIS-HG-samIv5iUBbq0g"
      // initialViewState={{
      //   longitude: parseFloat(longitude),
      //   latitude: parseFloat(latitude),
      //   zoom: 15,
      // }}
      longitude={longitude}
      latitude={latitude}
      zoom={15}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v8"
    />
  );
}

// const mapboxBase64Token =
//   "c2suZXlKMUlqb2liV1ZuWVdOdlpHVnlkWG9pTENKaElqb2lZMnhzZFdwcGNqQXdNV1J5Y0ROcWNIWndZbXBwT1dGc2RpSjkuR2toOG1IY0UwQTk1Nm9mRUNuaGdaUQ==";
