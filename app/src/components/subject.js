import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchError, getMeme } from './../actions';

const Meme = ({ memes, isFetching, error, dispatch }) => {

  useEffect(()=> {
    dispatch(getMeme());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching meme for ya!</h2>;
  }


  const handleClick = () => {
    dispatch(getMeme());
  }

  return (
    <>
      <h2>
          
      </h2>
      <div>
        <img src={memes.url}/>
      </div>
      <button onClick={handleClick}>Get new meme</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    memes: state.memes,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Meme);