import React from 'react';
import './TodoTemplate.scss'
const TodoMain = ({children}) => {
    return (
        <div className="wrapper">
            <div className="today">
            <p>What to do today</p>
            <div>{children}</div>
            </div>
        </div>
    );
};

export default TodoMain;