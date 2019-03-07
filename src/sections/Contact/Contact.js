import React from "react";

import { Button, InputAdornment, TextField, withStyles } from "@material-ui/core";
import { Person, Email, Message } from "@material-ui/icons";

import Section from "../../components/Section/Section";

const styles = theme => ({
    form: {
        maxWidth: "750px",
        margin: "0 auto"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
        background: "white",
        "& div:hover": {
            "& fieldset": {
                borderColor: `${ theme.palette.neutral.grey2 }`
            }
        },
        "& fieldset": {
            borderWidth: "1px !important"
        }
    },
    fieldIcon: {
        color: theme.palette.neutral.grey2
    },
    ageField: {
        display: "none"
    },
    submitButton: {
        background: theme.palette.primary.main
    }
});

class Contact extends React.Component {
    constructor(props) {
        super(props);

        //AGE IS A HONEYPOT FIELD, NOT VALID
        this.state = {
            name: '',
            email: '',
            message: '',
            age: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onRecaptchaVerify = this.onRecaptchaVerify.bind(this);
    }

    handleInputChange = field => event => {
        this.setState({
            [field]: event.target.value
        });
    };

    onRecaptchaVerify (resp) {
        console.log(resp);
    }

    render() {
        const { classes } = this.props;

        return (
            <Section
                id="contact"
                title="Contact the St. David’s society"
                subtitle="Let us know if you have any questions or comments"
                sectionStyle="even">
                <form className={ classes.form }>
                    <TextField
                        id="emailName"
                        className={ classes.textField }
                        value={ this.state.name }
                        onChange={ this.handleInputChange('name') }
                        margin="dense"
                        variant="outlined"
                        placeholder="Your name"
                        InputProps={ {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person className={ classes.fieldIcon } />
                                </InputAdornment>
                            )
                        } }
                    />
                    <TextField
                        id="emailAddress"
                        type="email"
                        className={ classes.textField }
                        value={ this.state.email }
                        onChange={ this.handleInputChange('email') }
                        margin="dense"
                        variant="outlined"
                        placeholder="Your email"
                        InputProps={ {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email className={ classes.fieldIcon } />
                                </InputAdornment>
                            )
                        } }
                    />
                    <TextField
                        id="emailMessage"
                        multiline
                        className={ classes.textField }
                        value={ this.state.message }
                        onChange={ this.handleInputChange('message') }
                        margin="dense"
                        variant="outlined"
                        placeholder="Your message"
                        InputProps={ {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Message className={ classes.fieldIcon } />
                                </InputAdornment>
                            )
                        } }
                    />
                    {/*Honeypot field*/}
                    <TextField
                        id="emailAge"
                        type="message"
                        className={ classes.ageField }
                        value={ this.state.age }
                        onChange={ this.handleInputChange('age') }
                        margin="dense"
                        variant="outlined"
                        placeholder="Your age"
                        InputProps={ {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Message className={ classes.fieldIcon } />
                                </InputAdornment>
                            )
                        } }
                    />
                    <Button variant="contained" style={{margin: "8px"}}>
                        Send message
                    </Button>
                </form>
            </Section>
        )
    }
}

export default withStyles(styles)(Contact);