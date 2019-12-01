import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
//step 1. Import react-router function
//add NavLink to importer
import { BrowserRouter as Router, Route } from 'react-router-dom';


//step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
<Router>
  <div>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/login" component={Login} />
</div>
</Router>),
  document.getElementById('root')
);
