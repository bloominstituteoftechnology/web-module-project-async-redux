import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDog, faildFetch } from "../actions";
import styled from "styled-components";

const DogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div  {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
  }

  button {
    background-color: #4caf50;
    color: white;
    border-radius: 5%;
    cursor: pointer;

    :hover {
        opacity: 50%;
    }
  }
`

const DogImage = styled.img`
box-sizing: border-box;
border: 1px solid black;
margin: 3%;
max-width: 95%;
border-radius: 15%;
  @media (max-width: 768px){
  max-width: 100%;
  border-radius: 40%;
  }
`

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
    <DogWrapper>
      <div>
        <h1>Here is a Dog</h1>
        <DogImage src={dog} />
      </div>
      <button onClick={handleGetDog}>Click to see a new Dog!</button>
    </DogWrapper>
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