import React , { useState, useRef,useCallback } from 'react';
import './TodoTemplate.scss';

import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const date = new Date();
const date_year = date.getFullYear();
const date_month = date.getMonth()+1;
const date_day = date.getDate();
const new_date = (date_year +":"+ date_month +":"+ date_day);
	
var st_date = new Date()
  .toISOString()
  .substr(0, 10)
  .replace("T", " ");

const TodoTemplate = ( ) => {
    const [isLogged , setIsLogged ] = useState(true);
    
    const [todos, setTodos] = useState([
    {
      id: 1,
      text: "1",
      isChecked: false,
      date: st_date, 
      fk_user_id:1
    },
    {
      id: 2,
      text: "2",
      isChecked: true,
      date: new_date, 
      fk_user_id:1
    },
    {
      id: 3,
      text: "3",
      isChecked: false,
      date: new_date, 
      fk_user_id:1
    }
    ]);

    const nextId = useRef(4);
    
    const onInsert = useCallback( text =>{
        const todo = {
          id : nextId.current,
          text,
          isChecked : false,
          date: new_date,
          fk_user_id : 1,
        };        
        setTodos(todos.concat(todo));
        nextId.current += 1;
    },
      [todos],
    );

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
            todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo)
        )
      },
      [todos],
    );
    if (isLogged) {
        return (
            <TodoMain>
                <TodoInput onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
                
            </TodoMain>
        );    
    } else {
        return(
        <div className="wrapper">
            <div className="content-title">
                 오늘 할 일을 
                 작성 해 주세요 
            </div>
        </div>
        )
    };

};

export default TodoTemplate;