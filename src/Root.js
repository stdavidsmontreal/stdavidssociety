import React from "react";
import { withStyles, withWidth, Typography } from "@material-ui/core";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import EventCard from "./components/EventCard/EventCard";
import Membership from "./sections/Membership/Membership";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

const styles = theme => ({
    main: {
        paddingTop: 110,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 85
        }
    }
});

class Root extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="App">
                <Header />
                <main className={ classes.main }>
                    <Section
                        id="about"
                        title={ "What is the Montreal St. David’s Society?" }
                        sectionStyle={ "odd" }
                    >
                        <Typography variant="body1">
                            Why are you pointing your screwdrivers like that? They're scientific instruments, not
                            water pistols. One day, just one day, maybe I'll meet somebody who gets the whole 'don't
                            wander off' thing. Clara, I'm not your boyfriend. I never said it was your mistake. That
                            could blow a hole in the space-time continuum, the size of—actually, the exact size of
                            Belgium. That's a bit undramatic, isn't it? 'Belgium'? People assume that time is a
                            strict progression of cause-and-effect... but actually, from a non-linear,
                            non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey...
                            stuff.
                        </Typography>
                    </Section>
                    <Section
                        id="events"
                        title="Upcoming events"
                        sectionStyle="even"
                    >
                        <EventCard
                            title="Title of the first upcoming event"
                            content={ `Join us for the first official event hosted by the St. David’s society.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis.` }
                            date={ new Date("2019-03-25") }
                        />
                        <EventCard
                            title="Title of the first upcoming event"
                            content={ `Join us for the first official event hosted by the St. David’s society.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis.` }
                            date={ new Date("2019-04-04") }
                        />
                    </Section>
                    <Membership />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    }
}

export default withWidth()(withStyles(styles)(Root));