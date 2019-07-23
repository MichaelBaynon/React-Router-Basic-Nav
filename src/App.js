import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => (
  <Router>
  <div>
    <Navigation />
    <Switch>
<Route  path='/' exact component={Home} />
<Route  path='/about' exact component={About} />
<Route  path='/contact' exact component={Contact} />
    </Switch>
   
  </div>
  </Router>
  
);

export default App;
