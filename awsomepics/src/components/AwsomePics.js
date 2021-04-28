import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImage } from "../actions/imageActions";



// If loading, display a loading message
// Otherwise, render the image
const Image = (props) => {

  useEffect(() => {
    // Fetch a joke when the component mounts (useEffect with an empty dependency array is like componentDidMount.)
    props.fetchImage();
  },[props.Image]);

  if (props.loading) {
    return (
      <>
        <p>Fetching another awsome image...</p>
      </>
    )
  }
  return (
    <>
      {/* <h3>{props.image.setup}</h3>
      <h2>{props.joke.punchline}</h2> */}
      <button onClick={() => props.fetchImage()}>Fetch some Image</button>
    </>
  )
}

// Step 3: connect components to Redux

const mapStateToProps = (state) => {
  return {
    image: state.image,
    loading: state.loading
  }
};

const mapDispatchToProps = {fetchImage}

export default connect(mapStateToProps, mapDispatchToProps)(Image);