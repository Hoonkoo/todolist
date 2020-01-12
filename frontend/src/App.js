import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoLogin from './TodoLogin';
import TodoRegister from './TodoRegister';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import TodoDashBoard from './TodoDashBoard';
import TodoDashBoardItem from "./TodoDashBoardItem";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import TodoLoing from './TodoLogin';
import Header from './component/Header';
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={TodoTemplate}/>
        <Route path="/login" component={TodoLogin}/>
      </Switch>
      
    </>
  );
}

export default App;
