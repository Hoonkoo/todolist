import React from 'react';

import { Link } from 'react-router-dom';
const TodoLogin = () => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" /> 
            <label htmlFor="password">password</label>
            <input type="password"/>
            <button>Sign in</button>

            <Link to='/signup'>
                <button>Sign up</button>
            </Link>
        </div>
    );
};

export default TodoLogin;