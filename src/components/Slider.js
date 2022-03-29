import React, { useState, useEffect } from 'react';
import './../css/slider.css';
import Next from './../images/next.svg';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { GrFormClose } from 'react-icons/gr';

function Slider(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [ifShowBigPicture, setIfShowBigPicture] = useState(false);

    useEffect(() => {
        slides(0);

        var whichImageBubbles = document.getElementsByClassName("SLIDER_" + props.nth);
        whichImageBubbles[0].classList.remove("nth-unactive");
        whichImageBubbles[0].classList.add("nth-active");
    }, [])

    function slides(n) {
        var sliderImages = document.getElementsByName(props.nth);

        if(currentImage + n > sliderImages.length - 1) {
            n = 0;
            setCurrentImage(n);
        } else if(currentImage + n < 0) {
            n = sliderImages.length - 1;
            setCurrentImage(n);
        } else {
            n = currentImage + n;
            setCurrentImage(n);
        }

        moveLightBubble(n);

        var i = 0;
        for(var item of sliderImages) {
            if(i != n) {
                item.style.display = "none";
            } else {
                item.style.display = "inline-block";
            }
            i = i + 1;
        }
    }

    function moveLightBubble(n) {
        var whichImageBubbles = document.getElementsByClassName("SLIDER_" + props.nth);
        for (const element of whichImageBubbles) {
            element.classList.add("nth-unactive");
            element.classList.remove("nth-active");
        }
        whichImageBubbles[n].classList.add("nth-active");
        whichImageBubbles[n].classList.remove("nth-unactive");
    }


    const [currBigImgUrl, setCurrBigImgUrl] = useState("");
    function showBigPicture(p) {
        setCurrBigImgUrl(p)
        setIfShowBigPicture(true);
    }
    return (
        <div>
            {
                ifShowBigPicture && currBigImgUrl != ""?
                    <div className='big-picture-box'>
                        <div className='big-picture-bg' />
                        <div className='big-picture-close' onClick={() => {
                            setIfShowBigPicture(false);
                            setCurrBigImgUrl("");
                        }}><GrFormClose /></div>
                        <img className="slider-image" src={currBigImgUrl} />
                    </div>
                :
                    null
            }
            {
                props.deviceType == "monitor" ?
                    <div className="slider-container">
                        <div className="slider-moveable-div">
                            {
                                props.images.map(p =>
                                    <div className="my-slider-element fadee" name={props.nth}>
                                        <img className="slider-image s-i" src={p} onClick={() => showBigPicture(p)}/>
                                    </div>
                                )
                            }
                        </div>
            
                        <div className="which-img-box">
                            {
                                props.images.map(p =>
                                    <div className={"nth-bubble-img nth-unactive SLIDER_" + props.nth} id={props.nth + "_" + props.images.indexOf(p)}/>
                                )
                            }
                        </div>
                        <div className="prev-button" onClick={(e) => slides(-1)}><BsFillArrowRightCircleFill /></div>
                        <div className="next-button" onClick={(e) => slides(1)}><BsFillArrowRightCircleFill /></div>
                    </div>
                :
                    <div className="slider-mobile-container">
                        <div className="slider-moveable-div">
                            {
                                props.images.map(p =>
                                    <div className="my-slider-element fadee" name={props.nth}>
                                        <img className="slider-image s-i" src={p} onClick={() => showBigPicture(p)}/>
                                    </div>
                                )
                            }
                        </div>
            
                        <div className="which-img-box">
                            {
                                props.images.map(p =>
                                    <div className={"nth-bubble-img nth-unactive SLIDER_" + props.nth} id={props.nth + "_" + props.images.indexOf(p)}/>
                                )
                            }
                        </div>
                        <div className="prev-button prev-phone-btn" onClick={(e) => slides(-1)}><BsFillArrowRightCircleFill /></div>
                        <div className="next-button next-phone-btn" onClick={(e) => slides(1)}><BsFillArrowRightCircleFill /></div>
                    </div>
            }
        </div>
    );
}

export default Slider;
