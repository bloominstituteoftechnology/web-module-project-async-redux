import './App.css';
import { connect } from 'react-dom'
import CharacterList from './components/CharacterList'

function App(props) {

  const { characters, loading } = props;

  return (
    <div className="App">
     <h1>Use the force, Harry! -Gandolf</h1> 

     {
       loading ? <h3>Grabbing the data</h3> : <CharacterList />
     }
    </div>
  );
}

const mapStateToProps = state => {
  return{
    lading:state.loading
  }
}

export default connect(mapStateToProps)(App);
