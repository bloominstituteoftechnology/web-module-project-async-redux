import './App.css';
import { Link, Route, Switch, } from 'react-router-dom';
import YugiohCardList from './components/YugiohCardList';


function App() {


  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <YugiohCardList />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
