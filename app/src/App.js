import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import PokemonList from './components/PokemonList'

function App() {
  return (
    <div className="App">
      <h1>Dungeons and Dragons Spell List</h1>
      <PokemonList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: 'Hello I am working!'
  }
}

export default connect(mapStateToProps, { })(App);
