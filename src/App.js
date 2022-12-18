import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Splash from './components/Spash'
import CardView from './components/CardView';
import Card from './components/Card';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={Splash } />
          <Route exact path="/cards">
            <CardView />
          </Route>
          <Route path={"/cards/:cardID"} element={<Card />}>
            <Card cards={props.displayCards}/>
          </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    displayCards: state.card.displayCards
  }
}

export default connect(mapStateToProps,{})(App);