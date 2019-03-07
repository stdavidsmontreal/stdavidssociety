import React from "react";
import classNames from 'classnames';

import { Card, CardContent, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
    card: { margin: "15px 0" },
    cardWrapper: {
        display: "flex",
        padding: "20px 25px",
        [theme.breakpoints.down('sm')]: {
            padding: "15px 20px",
            flexDirection: "column"
        }
    },
    eventDetails: {
        paddingRight: "50px",
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0
        }
    },
    eventTitle: {
        marginBottom: "10px"
    },
    eventDate: {
        padding: "0 30px 0 50px",
        minWidth: "75px",
        borderLeft: "1px solid #1b1b1b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            borderLeft: "none",
            borderTop: "1px solid #1b1b1b",
            marginTop: 15,
            padding: "15px 0 0",
        }
    },
    eventDay: {
        fontFamily: "Ubuntu",
        fontSize: "60px",
        lineHeight: 1
    },
    eventMonth: {
        fontSize: "24px",
        padding: "5px 0",
        lineHeight: 1
    },
    eventYear: {
        fontSize: "16px",
        lineHeight: 1
    }
});

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class EventCard extends React.Component {
    render() {
        const { classes, title, content, date } = this.props;

        return (
            <Card className={ classNames(classes.card) }>
                <div>
                    <CardContent className={ classNames(classes.cardWrapper) }>
                        <div className={ classNames(classes.eventDetails) }>
                            <Typography variant="h6" className={ classNames(classes.eventTitle) }>
                                { title }
                            </Typography>
                            <Typography variant="body1">
                                { content }
                            </Typography>
                        </div>
                        <div className={ classNames(classes.eventDate) }>
                            <Typography
                                variant="h3"
                                align="center"
                                className={ classNames(classes.eventDay) }
                            >{ date.getDate()+1 }</Typography>
                            <Typography
                                variant="subtitle1"
                                align="center"
                                className={ classNames(classes.eventMonth) }
                            >{ months[date.getMonth()] }</Typography>
                            <Typography
                                variant="caption"
                                align="center"
                                className={ classNames(classes.eventYear) }
                            >{ date.getFullYear() }</Typography>
                        </div>
                    </CardContent>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(EventCard);