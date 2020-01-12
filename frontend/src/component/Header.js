import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact className="item" activeClassName="active" to="/">Logo</NavLink>
            <NavLink exact className="item" activeClassName="active" to="/DashBoard">DashBoard</NavLink>
            <NavLink exact className="item" activeClassName="active" to="/Login">Login</NavLink>
        </div>
    );
};

export default Header;