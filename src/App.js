import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import PremierReviews from './components/PremierReviews'
import FTG from './components/FTG'
import Charakeep from './components/Charakeep'
import Magneto from './components/Magneto'
import Pokedoption from './components/Pokedoption'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">

      </div>
      <div className="routes">
        <Switch>
          <Route exact path="/premier">
            <PremierReviews

            />
          </Route>
          <Route exact path="/ftg">
            <FTG
              
            />
          </Route>
          <Route exact path="/charakeep">
            <Charakeep
              
            />
          </Route>
          <Route exact path="/magneto">
            <Magneto
              
            />
          </Route>
          <Route exact path="/pokedoption">
            <Pokedoption
              
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
