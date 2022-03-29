import React from "react";

import './../css/footer.css';

import { useEffect, useState } from "react";

import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';

function Footer() {

    const [ifAnimateEmail, setIfAnimateEmail] = useState(true);
    function copyMail() {
        navigator.clipboard.writeText("amadeuszstanek@gmail.com");

        if(!ifAnimateEmail) {
            return;
        }
        setIfAnimateEmail(false);

        var copyPop = document.getElementsByClassName("copy-pop")[0];
        copyPop.style.top = "-10px";
        copyPop.style.opacity = "1.0";

        setTimeout(() => {
            copyPop.style.opacity = "0";
        }, 800);
        setTimeout(() => {
            copyPop.style.top = "10px";
            setIfAnimateEmail(true);
        }, 1000);
    }

    return (
        <div className="footer-container">
            <div className="footer-socials-box">
                <div className="footer-socials-grid">
                    <a href="https://github.com/zawodowo" target="_blank">
                        <div className="social-bubble">
                            <AiOutlineGithub />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/amadeuszs1" target="_blank">
                        <div className="social-bubble">
                            <AiFillFacebook />
                        </div>
                    </a>
                    <div className="social-bubble" onClick={() => {copyMail()}}>
                        <div className="copy-pop">Copied!</div>
                        <AiOutlineMail />
                    </div>
                    <a href="https://stackoverflow.com/users/15249783/voraz" target="_blank">
                        <div className="social-bubble">
                            <BsStackOverflow />
                        </div>
                    </a>
                </div>
            </div>
            <div className="mail-box">
                <a href="mailto:amadeuszstanek@gmail.com">
                    amadeuszstanek@gmail.com
                </a>
            </div>

            <div className="creator-box">
                Amadeusz Stankiewicz ©
            </div>
        </div>
    );
}

export default Footer;
