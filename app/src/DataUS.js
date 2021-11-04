import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react';

import { getData, fetchFail } from './Actions/actions';


const DataUS = (props) => {
  const { data, isFetching, error} = props;
  useEffect(() => {
    props.getData();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = ()=> {
    props.getData();
  };

  
  return (
    <div className="App">
        <h2> Data: ------- </h2>
        <h3>Year: {data.Year}</h3>
        <h3>Nation: {data.Nation}</h3>
        <h3>Population: {data.Population}</h3>
        <button onClick={handleClick}>Get new data</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state',state);
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData, fetchFail })(DataUS);