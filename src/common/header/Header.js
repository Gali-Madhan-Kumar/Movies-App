import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import '../header/Header.css';

class Header extends Component {
    render() {
        return(
            <div>
                <Button variant="contained" color="default">Login</Button>
            </div>
        )
    }
}

export default Header;