import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Article from "./article";
import "../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
class Articles extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return this.props.isLoading ? (
      <>
        <h1 className="mainTitle">Loading...</h1>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={10000}
          className={"mainTitle"}
          //3 secs
        />
      </>
    ) : (
      this.props.articles.map((article) => {
        return <Article article={article}></Article>;
      })
    );
  }
}

const mapStateToProps = (state) => {
  return { articles: state.articles, isLoading: state.isLoading };
};
export default connect(mapStateToProps, { fetchData })(Articles);
