import React from "react";
import { FaMusic } from "react-icons/fa";
import styled from "styled-components";

//Styles
const StyledDiv = styled.div`
  text-align: center;
  margin-top: 5%;
`;

const StyledIcon = styled.div`
  margin-top: 10%;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const handleClick = () => {
  console.log("anything");
};

const Generate = () => {
  return (
    <StyledDiv>
      <StyledTitle>Generate Random Genre</StyledTitle>
      <StyledIcon>
        <Button onClick={handleClick}>
          <FaMusic className="App-logo" />
        </Button>
      </StyledIcon>
    </StyledDiv>
  );
};

export default Generate;
