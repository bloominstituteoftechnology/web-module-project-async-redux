import React, { Component } from "react";
import Articles from "./components/articles";
export default class App extends Component {
  render() {
    return (
      <>
        <h1 className={"mainTitle"}>My Website</h1>
        <Articles />
      </>
    );
  }
}
