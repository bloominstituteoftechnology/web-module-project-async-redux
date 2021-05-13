import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDog } from './../Actions';

const Dog = (props) => {
  const { dog, isFetching, error, dispatch } = props;

  useEffect(() => {
    dispatch(fetchDog());
    // props.fetchPerson();
  }, []);

  const handleClick = () => {
    // props.fetchFail("Pushed the button too hard!!!");
    dispatch(fetchDog());
  }

  if (error) {
    return <h2>Errored: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Dog!</h2>;
  }

  return (
    <>
      <div>
        <img src={dog.picture.message}/>
      </div>
      <button onClick={(e)=>{ handleClick() }}>Get New Dog</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    dog: state.dog,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Dog);