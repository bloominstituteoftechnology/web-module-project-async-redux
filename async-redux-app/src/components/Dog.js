import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDog, faildFetch } from "../actions";
import styled from "styled-components";

const DogImage = styled.img`
box-sizing: border-box;
border: 1px solid black;
margin: 3%;
border-radius: 30%;
  @media (max-width: 768px){
  max-width: 100%;
  border-radius: 50%;
  }
;`

const Dog = (props) => {
  const { dog, isFetching, error } = props;
  useEffect(() => {
    props.getDog();
  }, []);

  const handleGetDog = () => {
    props.getDog();
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching dog for ya! Stand By!</h2>;
  }

  return (
    <div>
        <div>
            <DogImage src={dog} />
        </div>
        <button onClick={handleGetDog}>Click to see a new Dog!</button>
    </div>
  )

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      dog: state.dog,
      isFetching: state.isFetching,
      error: state.error
  }
  
}

export default connect(mapStateToProps, { getDog, faildFetch })(Dog);