import React from 'react';
import TodoDashBoardItem from './TodoDashBoardItem';
import TodoListItem from './TodoListItem';


//해결해야될 문제  (해결한듯) 20191231<20200101 true
//다음년 1월 1,2일 경우 12월 31일 0101 1231 비교하면 
const TodoDashBoard = ({todos , onRemove, onToggle}) => {

    return (
        <div>
            {todos.map(todo =>(
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
            {/* {todos} */}
        </div>
    );
};

export default TodoDashBoard;