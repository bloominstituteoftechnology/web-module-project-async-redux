import React from "react";
import ZipCodeForm from "./components/ZipCodeForm";
import { connect } from "react-redux";

import "./App.css";
import ZipCodeFormat from "./components/ZipCodeFormat";

function App(props) {
  const { loading, zipCodeData, error } = props;

  return (
    <div className="App">
      <h1>Zip Code Data</h1>
      <ZipCodeForm />
      {error !== "" && <h3>{error}</h3>}
      {loading ? (
        <h2>Gathering Data...</h2>
      ) : (
        <ZipCodeFormat zipCodes={zipCodeData} />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    zipCodeData: state.zipCodeData,
    error: state.error,
  };
};
export default connect(mapStateToProps)(App);
