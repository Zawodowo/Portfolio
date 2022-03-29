import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketchDefault from '../sketch/sketchDefault';

import './../css/default.css';

function ErrorExample() {
    return (
        <div className="default-container">
            <div className="default-bg-script">
                <ReactP5Wrapper sketch={sketchDefault} className="sketchDefault"/>
            </div>
        </div>
    );
}

export default ErrorExample;
