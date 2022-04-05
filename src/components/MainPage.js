import { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from './../sketch/sketch';

import 'bootstrap/dist/css/bootstrap.min.css';

import './../App.css';
import useScrollPosition from "./useScrollPosition";

import Projects from './Projects.js';
import Contact from './Contact.js';
import MenuBar from './MenuBar.js';
import Footer from './Footer.js';
import Canvas from './Canvas.js';

import { AiOutlineArrowUp } from 'react-icons/ai';

function MainPage() {
    const [ifShowBgFirst, setIfShowBgFirst] = useState(true);


    useEffect(() => {
        //SET MAX WIDTH AND HEIGHT
        var mainPage = document.getElementsByClassName("front-page")[0];
        mainPage.style.maxHeight = String(mainPage.offsetHeight) + "px";
        mainPage.style.maxWidth = String(mainPage.offsetWidth) + "px";

        //SCROLL IF NEEDED
        if(window.location.hash == "#projects") {
            const scrollElement = document.getElementsByClassName("projects-container-bg")[0];
            const interval = setInterval(function () {
                window.scroll(0, scrollElement.offsetTop);
                clearInterval(interval);
            }, 300);
        } else if(window.location.hash == "#contact") {
            const scrollElement = document.getElementsByClassName("contact-container-bg")[0];
            const interval = setInterval(function () {
                window.scroll(0, scrollElement.offsetTop);
                clearInterval(interval);
            }, 300);
        }
    }, [])

    const scrollPosition = useScrollPosition();
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        setScrollY(scrollPosition);
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", setScrollY, { passive: true });
    
        return () => {
            window.removeEventListener("scroll", setScrollY);
        };
    }, [scrollY]);

    useEffect(() => {
        var scrollBtn = document.getElementsByClassName("scroll-top");
        if(scrollY > 0) {
            scrollBtn[0].style.display = "block";
        } else if(scrollY == 0) {
            scrollBtn[0].style.display = "none";
        }

        var scrollAnim = document.getElementsByClassName("icon-scroll");
        if(scrollY > 50) {
            scrollAnim[0].style = "opacity: 0";
        } else if(scrollY <= 49) {
            scrollAnim[0].style = "opacity: 1";
        }
        var i = 0;

    }, [scrollY]);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="parent">
            <MenuBar pageType="main" scrollY={scrollY} />

            <div className="front-page" id="front-page">
                <div className="inside-front-page">
                    <div className="left-front-page">
                        <Canvas />
                        <div className="main-title-container">
                            <div className="main-title-container-bg" />
                            <h1 className="main-header">Hello, I'm</h1>
                            <h2 className="sub-header">Amadeusz Stankiewicz</h2>
                            <h3 className="subsub-header">Full Stack and Android developer</h3>
                        </div>
                    </div>
                </div>

            <div className='icon-scroll'></div>
            </div>


            <Projects scrollY={scrollY} />

            <Contact />

            <Footer />
            <div className="scroll-top" onClick={() => scrollToTop()}>
                <AiOutlineArrowUp />
            </div>
        </div>
    );
}

export default MainPage;
