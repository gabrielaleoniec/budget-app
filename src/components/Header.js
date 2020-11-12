import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        </nav>
    </div>
);

export default Header;