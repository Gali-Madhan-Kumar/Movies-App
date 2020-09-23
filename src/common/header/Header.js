import { Button, Tabs, Tab, Typography, InputLabel, FormControl, Input } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import '../header/Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0 }}>
            {props.children}
        </Typography>
    )
}

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
                    onRequestClose={this.closeModalHandler}
                    style={modalStyle}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username"> Username</InputLabel>
                            <Input id="username" type="text" />
                        </FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="password"> Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                    </TabContainer>
                </Modal>
            </Fragment>
        )
    }
}

export default Header;