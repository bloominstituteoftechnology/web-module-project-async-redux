
import './App.css';
import React from 'react';

import AnimeList from "./components/anime"
import styled from "styled-components"

const STDiv = styled.div`
   background-image: url("/dbz-bg.png");
`
const STH1 = styled.h1`
   margin:0;
   padding: 1%;
   font-size: 5rem;
   font-family: 'Franklin Gothic Medium';
   color: black;
`



class App extends React.Component {



  render(){
    return (
      <STDiv className="App">
        <STH1>DBZ</STH1>
        <AnimeList />
      </STDiv>
    );
  }
}

export default App;
