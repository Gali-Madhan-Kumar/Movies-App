import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import '../header/Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-btn">
                        <Button variant="contained" color="default">Login</Button>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;