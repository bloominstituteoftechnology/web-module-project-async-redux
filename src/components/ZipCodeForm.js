import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getZipCode } from "../actions";

function ZipCodeForm(props) {
  const [zipCode, setZipCode] = useState("");
  const handleChange = (evt) => {
    evt.preventDefault();
    setZipCode(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.getZipCode(zipCode);
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
export default connect(null, { getZipCode })(ZipCodeForm);
