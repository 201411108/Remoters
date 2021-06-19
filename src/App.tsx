import React from 'react';
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Company from 'pages/Company'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route path='/company' component={Company} />
    </div>
  );
}

export default App;
