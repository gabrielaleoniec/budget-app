import React from 'react';
import { connect } from 'react-redux';
import { startLogInGoogle, startLogInGitHub } from '../actions/auth'

export const LoginPage = ({ startLogInGoogle, startLogInGitHub }) => {
    return (
        <div className="box-layout box-layout--background">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Budget App</h1>
                <p>It's time to get your expenses under control</p>
                <button onClick={startLogInGoogle} className="button button--margin-bottom">Login with Google</button>
                <button onClick={startLogInGitHub} className="button">Login with GitHub</button>
            </div>
        </div>);
};

const mapDispatchToProps = (dispatch) => ({
    startLogInGoogle: () => dispatch(startLogInGoogle()),
    startLogInGitHub: () => dispatch(startLogInGitHub())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
