import React from 'react';
import './TodoTemplate.scss';
import TodoLogin from './TodoLogin';

import { Route,Link } from 'react-router-dom';

const TodoTemplate = ( ) => {
    return (
        <div className="wrapper">
            <div className="content-title">
                오늘 할 일을 
                작성 해 주세요 
            </div>
            <div className="content">
               

            </div>
                
            
        </div>
    );
};

export default TodoTemplate;