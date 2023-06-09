import React from "react";
import { useState } from "react";

function ZipCodeForm() {
  const [zipCode, setZipCode] = useState("");
  const handleChange = (evt) => {
    evt.preventDefault();
    setZipCode(e.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("clicked");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="zipCodeSearch">ZipCode Search</label>
        <input
          type="input"
          name="zipCodeSearch"
          id="zipCodeSearch"
          onChange={handleChange}
        />
        <button>Find Data</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  zipCodeData: state.zipCodeData;
};
export default ZipCodeForm;
