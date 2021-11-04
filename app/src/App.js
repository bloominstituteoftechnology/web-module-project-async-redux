import './App.css';
import Suggestion from './components/Suggestion.js'
import Favorites from './components/Favorites'

function App() {
  return (
    <div className="App">
      <h1>GO DO SOMETHING</h1>
      <div className="boxes">
        <Suggestion/>
        <Favorites/>
      </div>
    </div>
  );
}

export default App;