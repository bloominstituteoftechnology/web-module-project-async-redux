import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImage } from "../actions/liliappAction";
// If loading, display a loading message
// render the image
const Image = (props) => {
  useEffect(() => {

    props.fetchImage();
  },[props.Image]);
  if (props.loading) {
    return (
      <>
        <p>Fetching another image...</p>
      </>
    )
  }
  return (
    <>
      <button onClick={() => props.fetchImage()}>Fetch some image</button>
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