import CharacterList  from './components/characters'
import {Switch, Link, Route, useHistory} from 'react-router-dom'

import About from './components/about'
import FavList from './components/favList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Wubba Lubba Dub-Dub!</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Favs'>Fav List</Link>

        </nav>
      </header>

      <Switch>
        <Route path='/Favs'>
          <FavList />
        </Route>
        <Route path='/About'>
          <About />
        </Route>
        <Route path='/'>
          <CharacterList />
        </Route>
        
      </Switch>

      <span>created by Panz for Lambda Web-40  &#169;</span>
    </div>
  );
}

export default App;
