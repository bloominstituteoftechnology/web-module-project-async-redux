import React, { useEffect } from 'react';
import { getCat, fetchFail } from '../actions';
import { connect } from 'react-redux';
import '../App.css';


const Cat = (props) => {
  const { cat, isFetching, error } = props;
  
  useEffect(()=> {
    props.getCat();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching health for ya!</h2>;
  }

  const handleClick = ()=> {
    props.getCat();
  }

  return (
    <>
      <div className="App">
        <h2 className="App"> {cat}</h2>
      </div>
      <button onClick={handleClick}>Get new cat</button>
      <button onClick={()=> {
        props.fetchFail("Pressed the Error button!!!");
      }}> Error Button</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCat, fetchFail })(Cat);