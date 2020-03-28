import React, { Component } from 'react';
import './ContactForm.css';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

class ContactForm extends Component {
    render(){
        return (
            <section className="contact-form-section">
                <div className="contact-form">
                <Typography variant="h1">Contact Us</Typography>
                <form>
                    <TextField label="First Name"/>
                    <TextField label="Last Name"/>
                    <TextField label="Phone Number"/>
                    <TextField label="Email Address"/>
                    <Button id="contact-button" variant="contained" color="primary">Send</Button>
                </form>
                </div>
            </section>
        )
    };
}

export { ContactForm };