import uuid from 'react-uuid';
import { getTodos } from './Todos';
import React , { useState, useRef,useCallback,useContext } from 'react';
import './TodoTemplate.scss';

import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// import Context_date from './context/context_data';
// const date = new Date();
// const date_year = date.getFullYear();
// const date_month = date.getMonth()+1;
// const date_day = date.getDate() -3;
// const date_day2 = date.getDate() ;
// const new_date = (date_year +":"+ date_month +":"+ date_day );
// const new_date2 = date_year + ":" + date_month + ":" + date_day2;

var st_date = new Date()
  .toISOString()
  .substr(0, 10)
  .replace("T", " ");

//오늘 날짜 todos 필터
const date_fil = st_date.slice(5,10).replace("-","")

function isToday(data) {
  const data_todo = data
  const today_todos = data_todo.filter(d =>isToday_filter(d, date_fil));
  return today_todos
}

function isToday_filter(data, todaydata){
  const d1 = data.date.slice(5,10).replace("-","");
  const d2 = todaydata
  return d2 === d1
}
///////////////////

const TodoTemplate = ( ) => {
    const [isLogged , setIsLogged ] = useState(true);
    // const { Date } = useContext(Context_date);

    const [todos, setTodos] = useState(getTodos());
    
    // const todaySort = useCallback( todo => {
    //   setTodos(todos.filter(Number(todo.date.slice(5, 9).replace(":", "")) < Date.context_today.slice(5,9).replace(":","")))
    // }, []);
    

    const onInsert = useCallback( text =>{
        const todo = {
          id : uuid(),
          text,
          isChecked : false,
          date: st_date,
          fk_user_id : 1,
        };        
        setTodos(todos.concat(todo));
        //nextId.current += 1;
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
                <TodoList todos={isToday(todos)} onRemove={onRemove} onToggle={onToggle} />
                
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