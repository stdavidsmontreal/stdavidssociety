import React from "react";
import { List, ListItem, ListItemText, SwipeableDrawer, withWidth } from '@material-ui/core';

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
        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo(event) {
        event.preventDefault();

        //Get element to scroll to
        const element = document.querySelector(event.currentTarget.getAttribute("href"));

        //Get the element's top position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = scrollTop + element.getBoundingClientRect().top;

        //Get header height
        const headerHeight = document.querySelector("header").offsetHeight;

        //Scroll to element minus header height
        window.scrollTo(0, elementTop - headerHeight);
    }

    toggleDrawer(open) {
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
                                            <Button href="#about" onClick={ this.scrollTo }>Home</Button>
                                            <Button href="#events" onClick={ this.scrollTo }>Events</Button>
                                            <Button href="#membership" onClick={ this.scrollTo }>Memberships</Button>
                                            <Button href="#contact" onClick={ this.scrollTo }>Contact</Button>
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
                <SwipeableDrawer
                    anchor="right"
                    onClose={ () => this.toggleDrawer(false) }
                    onOpen={ () => this.toggleDrawer(true) }
                    open={ this.state.drawerOpen }
                >
                    <List>
                        { [
                            {
                                title: 'Home',
                                url: "#about"
                            },
                            {
                                title: 'Events',
                                url: "#events"
                            },
                            {
                                title: 'Memberships',
                                url: "#membership"
                            },
                            {
                                title: 'Contact',
                                url: "#contact"
                            }
                        ].map((item, index) => (
                            <ListItem
                                button href={ item.url }
                                component="a"
                                key={ item.title }
                                onClick={ (event) => {
                                    this.toggleDrawer(false);
                                    this.scrollTo(event);
                                } }
                            >
                                <ListItemText primary={ item.title } />
                            </ListItem>
                        )) }
                    </List>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default withWidth()(Header);