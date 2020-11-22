import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <div>
        <h1>Expensify App</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        </nav>
        <button onClick={startLogOut}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header);