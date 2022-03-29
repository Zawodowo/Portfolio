import React from "react";
import { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketchDefault from './../sketch/sketchDefault';

import './../css/default.css';

function Default() {
    useEffect(() => {
        if(window.location.pathname == "/errorshowpage") {
            var box = document.getElementsByClassName("default-info-container")[0];
            box.style.display = "none";
        }
    }, []);

    function backToMainPage() {
        console.log(window.location);
        window.location = window.location.origin;
    }

    return (
        <div className="default-container">
            <div className="default-bg-script">
                <ReactP5Wrapper sketch={sketchDefault} className="sketchDefault"/>
            </div>
            <div className="default-info-container">
                <div className="default-info-bg" />
                <p className="default-error-txt">ERROR</p>
                <p className="default-error-description-txt">Strona nie istnieje</p>
                <button className="default-button" type="submit" onClick={() => backToMainPage()}>Wróć</button>
            </div>
        </div>
    );
}

export default Default;
