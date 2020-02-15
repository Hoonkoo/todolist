import React, { useState,useCallback } from 'react';
import TodoDashBoard from './TodoDashBoard';
import TodoDashBoardMain from './TodoDashBoardMain';

import { getTodos } from './Todos';

//날짜 빼주는 함수
function userDateMin(i) {
  const today = new Date();
  today.setDate(today.getDate() - i);
  let todayMonth = today.getMonth() + 1;
  if (today.getMonth() < 10) {
    todayMonth = "0" + (today.getMonth() + 1);
  }
  let todat = today.getFullYear() + "-" + todayMonth + "-" + today.getDate();
  //todat = todat.slice(5,10).replace("-","");
  todat = todat.split("-").join('');
 
  return todat;
}

// 리팩토링 필수.. ㅅㅂ.. 이게 코드냐
function isTodayTodo(data) {
  const data_todo = data;
  const today_todos = data_todo.filter(d => 
    todoDate_filter(d, userDateMin(0)));
  return today_todos;
}
function isOneDayTodo(data) {
  const data_todo = data;
  const today_todos = data_todo.filter(d => 
    todoDate_filter(d, userDateMin(1)));
  return today_todos;
}
function isSecondDayTodo(data) {
  const data_todo = data;
  const today_todos = data_todo.filter(d => 
    todoDate_filter(d, userDateMin(2)));
  return today_todos;
}
function isThirdDayTodo(data) {
  const data_todo = data;
  const today_todos = data_todo.filter(d => 
    todoDate_filter(d, userDateMin(3)));
  return today_todos;
}

function todoDate_filter(data ,d) {
    const d1 = data.date.split("-").join('');
    return d1 === d
}


const TodoDashBoardTemplate = () => {

    const [todos, setTodos] = useState(getTodos());
    

    //중복코드로 수정이 필요한 부분
    const onRemove = useCallback(
      id => {
        setTodos(todos.filter(todo => todo.id !== id));
      },
      [todos]
    );

    const onToggle = useCallback(
      id => {
        setTodos(
          todos.map(todo =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
          )
        );
      },
      [todos]
    );

    
    return (
      <div>
        <TodoDashBoardMain>
          <TodoDashBoard
            todos={isTodayTodo(todos)}
            onRemove={onRemove}
            onToggle={onToggle}
          />
          <TodoDashBoard
            todos={isOneDayTodo(todos)}
            onRemove={onRemove}
            onToggle={onToggle}
          />
          <TodoDashBoard
            todos={isSecondDayTodo(todos)}
            onRemove={onRemove}
            onToggle={onToggle}
          />
          <TodoDashBoard
            todos={isThirdDayTodo(todos)}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        </TodoDashBoardMain>
      </div>
    );
};

export default TodoDashBoardTemplate;