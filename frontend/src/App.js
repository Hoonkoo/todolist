import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoLogin from './TodoLogin';


import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from './component/Header';
import TodoSignup from './TodoSignup';
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={TodoTemplate}/>
        <Route path="/login" component={TodoLogin}/>
        <Route path="/signup" component={TodoSignup}/>
      </Switch>
      
    </>
  );
}

export default App;
