import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

//custom components
import HomePage from './Components/Home Page';
import BeerList from './Components/BeerList';
import Profile from './Components/Profile';

const initialBeer = {
  name: 'homebrew',
}


function App() {
  
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      console.log(res.data);
      setBeers([...beers, ...res.data])
    }).catch(err => {
      console.error(err);
    })
  }, [])
  return (
    <div className="App">
      <header>
        <nav>
          <Link to= '/'> Home </Link>
          <Link to= '/beerlist'> Beer List </Link>
        </nav>
      </header>
      <Route path= '/profile/:id'>
            <Profile beers= {beers}/>
      </Route>
      <Route path = '/beerlist'>
        <BeerList beers = {beers}/>
      </Route>
      <Route exact path= '/'>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
