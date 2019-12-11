import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
  <divt>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/messages" component={Messages} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
  </divt>
  </Router>),
  document.getElementById('root')
);
