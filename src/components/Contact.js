import './../App.css';
import './../css/contact.css';
import { useEffect, useState } from "react";

import { useForm, ValidationError } from '@formspree/react';

import { ReactP5Wrapper } from "react-p5-wrapper";
import sketchContact from './../sketch/sketchContact';

function Contact() {
    const [state, handleSubmit] = useForm("xgeraqkw");
    const [ifShowAlert, setIfShowAlert] = useState(true);

    function showAlertMail(e) {
        var err = 0;
        var emailInput = document.getElementsByClassName("email-input")[0];
        if(emailInput.value.length == 0) {
            emailInput.classList.add("bounce");
            setTimeout(function() {
                emailInput.classList.remove("bounce");
            },  1000); 
            err = 1;
        }
        var messageInput = document.getElementsByClassName("message-input")[0];
        if(messageInput.value.length == 0) {
            messageInput.classList.add("bounce");
            setTimeout(function() {
                messageInput.classList.remove("bounce");
            },  1000);
            err = 1;
        }
        if(err == 1) {
            return;
        }

        var emailCurtain = document.getElementsByClassName("email-curtain")[0];
        var messageCurtains = document.getElementsByClassName("message-curtain")[0];
        var submitCurtains = document.getElementsByClassName("submit-curtain")[0];
        var textCurtain = document.getElementsByClassName("text-curtain")[0];

        var emailInput = document.getElementsByClassName("email-input")[0];
        var messageInput = document.getElementsByClassName("message-input")[0];
        var submitInput = document.getElementsByClassName("submit-button")[0];


        emailCurtain.style.width = String(emailInput.offsetWidth) + "px";
        setTimeout(() => {
            messageCurtains.style.width = String(emailInput.offsetWidth) + "px";
        }, 100);
        setTimeout(() => {
            submitCurtains.style.width = "135px";
        }, 200);

        setTimeout(() => {
            emailInput.style.visibility = "hidden";
            messageInput.style.visibility = "hidden";
            submitInput.style.visibility = "hidden";


            emailCurtain.style.top = "180px";
            submitCurtains.style.top = "180px";
        }, 700);

        setTimeout(() => {
            emailCurtain.style.visibility = "hidden";
            submitCurtains.style.visibility = "hidden";
            messageCurtains.style.top = "180px";
            messageCurtains.style.height = "80px";

            textCurtain.style.visibility = "visible";
        }, 750);

        setTimeout(() => {
            messageCurtains.style.width = "0px";
        }, 1400);
    }

    return (
        <div className="contact-container-bg">
            <div className="bg-p5-bottom-container">
                <div className="bg-p5-bottom-inside">
                    <ReactP5Wrapper sketch={sketchContact}/>
                </div>
            </div>
            <div className="contact-container" id="contact-container">
                <div className="contact-title-container">
                    <h1 className="contact-title-header">CONTACT ME</h1>
                </div>
                <div className="contact-content">
                    <div className="contact-card">
                        <div className="email-curtain contact-curtain" />
                        <div className="message-curtain contact-curtain" />
                        <div className="submit-curtain contact-curtain" />

                        <div className="text-curtain">Thanks for sending an email!</div>

                        <form onSubmit={handleSubmit} className="from-mail">
                            <div className="email-row">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your email address..."
                                    className="email-input"
                                    />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    />
                            </div>
                            <div className="message-row">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="10"
                                    placeholder="Your message..."
                                    className="message-input"
                                    />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    />
                            </div>
                            <div className="submit-row">
                                <button className="submit-button" type="submit" onClick={(e) => showAlertMail(e)} disabled={state.submitting}>Send Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
