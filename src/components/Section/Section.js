import React from "react";
import classNames from 'classnames';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionContainer: {
        width: 'auto',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 6,
        '&.odd': {
            "& .section-title": {
                background: theme.palette.primary.main,
                color: "white",
                marginTop: theme.spacing.unit * 2,
                marginBottom: theme.spacing.unit * 2,
            }
        },
        "&.even": {
            background: "#efefef"
        }
    },
    sectionTitle: {
        textTransform: "uppercase",
        marginTop: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        fontWeight: 500,
    },
    sectionSubtitle: {
        color: theme.palette.neutral.grey3
    },
    sectionContent: {
        width: 'auto',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1280 + theme.spacing.unit * 3 * 2)]: {
            width: 1080,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
});

class Section extends React.Component {
    render() {
        const { classes, children, id, title, subtitle, sectionStyle } = this.props;

        return (
            <div id={id} className={ classNames(classes.sectionContainer, sectionStyle) }>
                <Grid item xs={ 12 }>
                    { title ?
                        <Typography
                            className={ "section-title " + classNames(classes.sectionTitle) }
                            variant="h5"
                            align="center">
                            { title }
                        </Typography>
                        : null }
                    { subtitle ?
                        <Typography className={classNames(classes.sectionSubtitle)} variant="body1" align="center">
                            { subtitle }
                        </Typography>
                        : null
                    }
                    <div className={ classNames(classes.sectionContent) }>
                        { children }
                    </div>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Section);