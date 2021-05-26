import bitcoin from './bitcoin.png';
import Coins from './components/Coins';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bitcoin} className="App-logo" alt="logo" />
        <Coins />
        <p>
          WELCOME TO MY JUNGLE        
        </p>
      </header>
    </div>
  );
}

export default App;
