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
            <h1>{data.country}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ZipCodeFormat;
