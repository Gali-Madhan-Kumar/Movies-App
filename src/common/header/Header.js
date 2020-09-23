import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import '../header/Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        }
    }

    openModalHandler = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        return (
            <Fragment>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-btn">
                        <Button onClick={this.openModalHandler} variant="contained" color="default">Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} 
                isOpen={this.state.modalIsOpen} 
                contentLabel="Login"
                onRequestClose={this.closeModalHandler}></Modal>
            </Fragment>
        )
    }
}

export default Header;