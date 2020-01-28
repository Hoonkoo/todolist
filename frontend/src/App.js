import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from './component/Header';
import TodoTemplate from './TodoTemplate';
import TodoLogin from './TodoLogin';
import TodoSignup from './TodoSignup';
import TodoDashBoard from './TodoDashBoard';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={TodoTemplate}/>
        <Route path="/login" component={TodoLogin}/>
        <Route path="/signup" component={TodoSignup}/>
        <Route path="/DashBoard" component={TodoDashBoard}/> 
      </Switch>
      
    </>
  );
}

export default App;
