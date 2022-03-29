import React, { useEffect, useState } from 'react'
import './../css/canvas.css';

import { useMousePosition } from "./useMousePosition";

import { SiPhp, SiKotlin, SiReact, SiMysql, SiJavascript, SiHtml5, SiCss3, SiReacttable, SiPython } from 'react-icons/si';
import { RiCodeSSlashFill } from 'react-icons/ri';

function Canvas(props) {
    const position = useMousePosition();

    const codeTexts = ["<code>", "<html>", "<section>", "<h1>", "<span>", "<form>", "<img>", "<option>", "<textarea>"];
    const codeEndTexts = ["</code>", "</html>", "</section>", "</h1>", "</span>", "</form>", "</img>", "</option>", "</textarea>"];

    const [beforeTime, setBeforeTime] = useState();

    useEffect(() => {
        var icons = document.getElementsByClassName("canvas-icon");
        var parentWidth = icons[0].parentElement.clientWidth;
        var parentHeight = icons[0].parentElement.clientHeight;

        for(var i=0; i<icons.length; i++) {
            var icon = icons[i];

            icon.style.left = String(getRand(30, parentWidth - 30) + "px");
            icon.style.top = String(getRand(30, parentHeight - 30) + "px");
            icon.style.width = getRand(20, 20 + parentWidth/40) + "px"
        }

        const d = new Date();
        setBeforeTime(d.getTime());

        displayText();
        var myInterval = setInterval(function () {
            if(document.getElementById("canvas-start-code") == null || document.getElementById("canvas-end-code") == null) {
                clearInterval(myInterval);
                return;
            }
            document.getElementById("canvas-start-code").innerHTML = ""
            document.getElementById("canvas-end-code").innerHTML = ""
            displayText();
        }, 4000);
    }, [])


    useEffect(() => {
        const d = new Date();
        if(d.getTime() - beforeTime < 50) {
            return;
        }
        setBeforeTime(d.getTime());
        var icons = document.getElementsByClassName("canvas-icon");
        var parentWidth = icons[0].parentElement.clientWidth;
        var parentHeight = icons[0].parentElement.clientHeight;
        var DIVIDER = parentWidth/10;

        for(var i=0; i<icons.length; i++) {
            var icon = icons[i];
            var iconDist = distanceBetween(position, icon, DIVIDER)
            if(i%4 == 0) {
                icon.style.transform = "translate(" + iconDist.x + "px, " + iconDist.y + "px)";
            } else if(i%4 == 1) {
                icon.style.transform = "translate(" + -1* iconDist.x + "px, " + iconDist.y + "px)";
            } else if(i%4 == 2) {
                icon.style.transform = "translate(" + iconDist.x + "px, " + -1* iconDist.y + "px)";
            } else if(i%4 == 3) {
                icon.style.transform = "translate(" + -1* iconDist.x + "px, " + -1* iconDist.y + "px)";
            }
        }


        var frameTopRight = document.getElementsByClassName("canvas-frame-right-up")[0];
        var frameTopRightBG = document.getElementsByClassName("canvas-frame-right-up-bg")[0];
        var fTopRightDist = distanceBetween(position, frameTopRight, DIVIDER)
        frameTopRight.style.transform = "translate(" + fTopRightDist.x + "px, " + fTopRightDist.y + "px)";
        var fTopRightDistBG = distanceBetween(position, frameTopRightBG, DIVIDER*3)
        frameTopRightBG.style.transform = "translate(" + fTopRightDistBG.x + "px, " + fTopRightDistBG.y + "px)";

        var frameBottomLeft = document.getElementsByClassName("canvas-frame-left-down")[0];
        var frameBottomLeftBG = document.getElementsByClassName("canvas-frame-left-down-bg")[0];
        var fBotLeftDist = distanceBetween(position, frameBottomLeft, DIVIDER)
        frameBottomLeft.style.transform = "translate(" + fBotLeftDist.x + "px, " + fBotLeftDist.y + "px)";
        var fBotLeftDistBG = distanceBetween(position, frameBottomLeftBG, DIVIDER*3)
        frameBottomLeftBG.style.transform = "translate(" + fBotLeftDistBG.x + "px, " + fBotLeftDistBG.y + "px)";


        var bgIconBig = document.getElementsByClassName("canvas-bg-big-icon")[0];
        bgIconBig.style.transform = " translateY(-50%) rotate(" + (position.x + position.y)/60 + "deg)";
    }, [position])


    function distanceBetween(mousePos, element, divider) {
        var rect = element.getBoundingClientRect();

        var dist = {x: 0, y: 0}
        dist.x = (mousePos.x - rect.right) / divider;
        dist.y = (mousePos.y - rect.top) / divider;

        return dist;
    }


    function displayText() {
        let randomIndex = Math.floor(Math.random()*codeTexts.length)

        let letterUp = 0;
        const textUp = codeTexts[randomIndex];
        let letterDown = 0;
        const textDown = codeEndTexts[randomIndex];
        function typeText() {
            if(document.getElementById("canvas-start-code") == null || document.getElementById("canvas-end-code") == null) {
                return;
            }

            if (letterUp  < textUp.length) {
                document.getElementById("canvas-start-code").innerHTML += textUp.charAt(letterUp);
                letterUp++;
            }
            if (letterDown < textDown.length) {
                document.getElementById("canvas-end-code").innerHTML += textDown.charAt(letterDown);
                letterDown++;
                let speed = Math.floor(Math.random() * 125) + 25;
                setTimeout(typeText, speed);
            }
        }
        typeText();
    }
    



    function getRand(min, max) {
        return Math.random() * (max - min) + min;
    }
    return(
        <div className="canvas-bg">
            <div className="canvas-bg-big-icon">
                <SiReacttable />
            </div>

            <div className="canvas-code-start">
                <h2 id="canvas-start-code"></h2>
            </div>

            <div className="canvas-code-end">
                <h2 id="canvas-end-code"></h2>
            </div>

            <div className="canvas-frame-right-up" />
            <div className="canvas-frame-right-up-bg" />

            <div className="canvas-frame-left-down" />
            <div className="canvas-frame-left-down-bg" />

            <div className="canvas-icon">
                <SiPhp />
            </div>
            <div className="canvas-icon">
                <SiKotlin />
            </div>
            <div className="canvas-icon">
                <SiReact />
            </div>
            <div className="canvas-icon">
                <SiMysql />
            </div>
            <div className="canvas-icon">
                <SiJavascript />
            </div>
            <div className="canvas-icon">
                <SiHtml5 />
            </div>
            <div className="canvas-icon">
                <SiCss3 />
            </div>
            <div className="canvas-icon">
                <RiCodeSSlashFill />
            </div>
            <div className="canvas-icon">
                <SiPython />
            </div>
        </div>
    );
}

export default Canvas;