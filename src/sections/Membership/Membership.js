import React from "react";
import classNames from 'classnames';

import { Grid, Typography, Button, withStyles } from "@material-ui/core";

import Section from "../../components/Section/Section";

const styles = theme => ({
    subtitle : {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        paddingBottom: "10px"
    },
    root: {
        marginTop: "25px"
    },
    membershipSection : {
        padding: "5px 40px !important",
        "&:first-child" : {
            borderRight: "1px solid #757575",
            [theme.breakpoints.down('sm')]: {
                borderRight: "none"
            }
        },
        [theme.breakpoints.down('sm')]: {
            padding: "5px 20px !important"
        },
    }
});

class Membership extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Section
                id="membership"
                title="Membership"
                sectionStyle="odd">
                <Typography variant="h6" className={classNames(classes.subtitle)}>
                    Joining the St. David’s society is a great way to contribute to and meet other members of the Welsh
                    community in Montreal.
                </Typography>
                <Grid container className={ classes.root } spacing={ 40 }>
                    <Grid item xs={ 12 } md={ 6 } className={ classes.membershipSection } >
                        <Typography variant="h6">
                            Being a member gives you :
                        </Typography>
                        <ul>
                            <li>The main perk you get</li>
                            <li>Another perk which is great</li>
                            <li>Yet another advantage to being a member</li>
                            <li>And much more...</li>
                        </ul>
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 } className={ classes.membershipSection }>
                        <Typography variant="h6">
                            You can be a member of the St. David’s society for the small price of 50$
                        </Typography>
                        <Button variant="contained" style={{marginTop: "15px"}}>
                            Become a member
                        </Button>
                    </Grid>
                </Grid>
            </Section>
        )
    }
}

export default withStyles(styles)(Membership);