import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__container">
                <nav>
                    <Link to="/dashboard" className="header__link">
                        <h1 className="header__title">Expensify App</h1>
                    </Link>
                </nav>
                <button onClick={startLogOut} className="button button--link">Logout</button>
            </div>
        </div>

    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header);