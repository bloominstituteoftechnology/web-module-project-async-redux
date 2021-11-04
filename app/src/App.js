import logo from './logo.svg';
import './App.css';
import Suggestion from './components/Suggestion.js'
import Favorites from './components/Favorites'
import History from './components/History'

function App() {
  return (
    <div className="App">
      <h1>GO DO SOMETHING</h1>
      <div className="boxes">
        <Suggestion/>
        <Favorites/>
      </div>
      <History/>
    </div>
  );
}

export default App;
