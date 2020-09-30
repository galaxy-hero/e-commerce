import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const SmartphonePage = () => (
  <div>
    <h1>SMARTPHONE PAGE</h1>
  </div>
)


// in function app we render the components
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/smartphones' component={SmartphonePage}/>
      </Switch>
    </div>
  );
}

export default App;
