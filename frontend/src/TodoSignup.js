import React from 'react';

const TodoSignup = () => {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder=""/>
            <label htmlFor="password">password</label>
            <input type="password"/>
            <label htmlFor="comfirm_password">password</label>
            <input type="password" placeholder="confirm_password"/>
            <button>Sign up</button>
            
        </form>
    );
};

export default TodoSignup;