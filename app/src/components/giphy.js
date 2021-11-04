import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGiphy, fetchFail } from "../actions";

const Giphy = (props) => {
  const { giphy, isFetching, error } = props;

  useEffect(() => {
    props.getGiphy();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>The Best GIF Ever!</h2>;
  }

  const handleClick = () => {
    props.getGiphy();
  }

  const handleError = () => {
    props.fetchFail("Something is wrong. Try again later!");
  }

  return (
    <>
      <div>
        <h2>{giphy.title}</h2>
        <img src= {giphy.fixed_height_downsampled_url} alt="random gif"/>
      </div>
        <button onClick={handleClick} className="button">Get a new gif.</button>
        <button onClick={handleError}className="button">Error Button</button>


      
    
    </>
  );
};

const mapStateToProps = state => {
  return{
    giphy: state.giphy,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getGiphy, fetchFail})(Giphy);


