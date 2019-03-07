import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Root from "./Root";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#d21034"
        },
        neutral: {
            white: "ffffff",
            grey1: "#f2f2f2",
            grey2: "#757575",
            grey3: "#686868",
            grey4: "#1b1b1b",
            black: "000000",
            main: "#757575"
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Ubuntu',
            'Arial',
            'sans-serif'
        ].join(','),
        h1: {
            fontFamily: 'Comorant',
            fontWeight: 600
        },
        h2: {
            fontFamily: 'Comorant',
            fontWeight: 600
        },
        h3: {
            fontFamily: 'Comorant',
            fontWeight: 600
        },
        h4: {
            fontFamily: 'Comorant',
            fontWeight: 600
        },
        h5: {
            fontFamily: 'Comorant',
            fontWeight: 500
        },
        headline: {
            fontFamily: 'Ubuntu',
            fontWeight: 600,
            fontSize: "2rem"
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                boxShadow: "none",
                backgroundColor: "#757575",
                color: "white",
                '&:hover': {
                    backgroundColor: "#d21034"
                }
            }
        }
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={ theme }>
                <Root />
            </MuiThemeProvider>
        );
    }
}

export default App;
