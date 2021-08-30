import react from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
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
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
