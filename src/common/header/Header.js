import { Button, Tabs, Tab } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import '../header/Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0
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

    tabChangeHandler = (event, value) => {
        this.setState({
            value: value
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
                    onRequestClose={this.closeModalHandler}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                </Modal>
            </Fragment>
        )
    }
}

export default Header;