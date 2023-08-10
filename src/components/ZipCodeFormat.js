import React, { useState } from "react";
import { zipCodeData } from "../zipCodeData/zipCodeData";
function ZipCodeFormat(props) {
  const { zipCodes } = props;

  return (
    <div>
      <h1>Zip Code: {zipCodes["post code"]}</h1>
      <h2>City: {zipCodes.places.map((city) => city["place name"])}</h2>
      <h2>State: {zipCodes.places.map((state) => state.state)}</h2>
      <h2>Latitude: {zipCodes.places.map((latitude) => latitude.latitude)}</h2>
      <h2>
        Longitude: {zipCodes.places.map((latitude) => latitude.longitude)}
      </h2>
    </div>
  );
}

export default ZipCodeFormat;
