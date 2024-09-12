import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Header from "./components/Header"
import ListOfCards from "./components/ListOfCards"
import { connect } from 'react-redux';
import {getCharacter} from "./actions/actions"

function App(props) {
  // useEffect(() => {  props.getCharacter();   }, []);   console.log(props.character);
  return  (
    <div className="App">
      <Header/>
      <ListOfCards/>
    </div>
  );
}

const mapStateToProps = (state) => {   
  return { 
        character: state.character,     
        isFetching: state.isfetching,     
        error: state.error,  
       }; };

export default connect(mapStateToProps, { getCharacter })(App)