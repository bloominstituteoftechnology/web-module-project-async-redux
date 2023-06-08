import React, { useState } from "react";
import { zipCodeData } from "../zipCodeData/zipCodeData";
function ZipCodeFormat(props) {
  const { zipCodes } = props;
  console.log("aaron");
  return (
    <div>
      {zipCodes.map((data) => {
        return (
          <div className="zipCodeData">
            <h1>Zip Code: {data["post code"]}</h1>

            <h2>
              City:{" "}
              {data.places.map((place) => {
                return place["place name"];
              })}
            </h2>
            <h2>
              State:{" "}
              {data.places.map((place) => {
                return place.state;
              })}
            </h2>
            <h2>Country: {data.country}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ZipCodeFormat;
