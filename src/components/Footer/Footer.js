import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
    footerWrapper: {
        background: theme.palette.neutral.grey4,
        padding: "20px"
    }
});

class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.footerWrapper }>
                <Typography variant="body1" align="center" style={ { color: "white" } }>
                    ©Copyright St. David’s society 2019
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);