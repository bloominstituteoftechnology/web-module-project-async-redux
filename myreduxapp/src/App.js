import logo from './logo.svg';
import './App.css';
import React from "react"
import { Provider, connect } from 'react-redux';
import reducer from "./reducer/reducer.js"
import {getPokemon} from "./action/pokeaction.js"





function App(props) {
  const pokeArray = props.pokeArray;
  const selectedPokemon = props.selectedPokemon

  const getPokemon = (evt) => {
    evt.preventDefault()
    props.getPokemon(25)
  }


    console.log("**********")
    console.log(selectedPokemon)
  return (
    <div className="App">
      <form>
        <button 
        onClick={getPokemon}
        >Get pokemon</button>

        {!selectedPokemon ? <h2>Select a pokemon</h2>: <h1>{selectedPokemon.name}</h1>}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    selectedPokemon: state.newPokemon,
  }
}

export default connect(mapStateToProps, {getPokemon})(App);
