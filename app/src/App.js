import STAN from './STAN.png';
import Coins from './components/Coins';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={STAN} className="App-logo" alt="logo" />
        <p>
          WELCOME TO MY JUNGLE        
        </p>
      </header>
      <Coins />
    </div>
  );
}

export default App;
