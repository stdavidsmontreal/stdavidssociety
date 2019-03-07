import React from "react";
import { SwipeableDrawer, withWidth } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../assets/welsh-dragon.svg";

import "./Header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(open) {
        console.log(open);
        if (this.state.drawerOpen !== open) {
            this.setState({
                drawerOpen: open
            });
        }
    }

    render() {
        const { width } = this.props;

        const isMobile = width !== "xs";

        return (
            <div>
                <AppBar position="fixed" color="inherit">
                    <Toolbar>
                        <div className="header-container">
                            <a className="logo" href="/">
                                <img src={ logo } alt={ "St. David's Society" } />
                            </a>
                            <div className="header-wrapper">
                                <div className="header-top">
                                    <Typography variant="h5" color="inherit">
                                        Montreal St. David's Welsh Society
                                    </Typography>
                                </div>
                                { isMobile ?
                                    <>
                                        <div className="header-divider" />
                                        <nav>
                                            <Button href="#about">Home</Button>
                                            <Button href="#events">Events</Button>
                                            <Button href="#membership">Memberships</Button>
                                            <Button href="#contact">Contact</Button>
                                        </nav>
                                    </>
                                    : null }
                            </div>
                            { !isMobile ?
                                <IconButton
                                    color="inherit"
                                    onClick={ () => this.toggleDrawer(!this.state.drawerOpen) }
                                >
                                    <MenuIcon />
                                </IconButton>
                                : null }
                        </div>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer onClose={ () => this.toggleDrawer(false) } onOpen={ () => this.toggleDrawer(true) }
                                 open={ this.state.drawerOpen }>

                    {/*TODO: ADD Drawer content*/}

                </SwipeableDrawer>
            </div>
        )
    }
}

export default withWidth()(Header);