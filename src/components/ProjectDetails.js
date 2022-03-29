import MenuBar from './MenuBar.js';
import Slider from './Slider.js';
import Footer from './Footer.js';

import { Link } from "react-router-dom";

import './../css/project.css';
import './../css/projectdetails.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";

import monitor from './../images/monitor-bg.png';
import phone from './../images/phone-bg.png';

import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';


import { ReactP5Wrapper } from "react-p5-wrapper";
import sketchAnimation from './../sketch/sketchAnimation';

function ProjectDetails(props) {
    const [detailsData, setDetailsData] = useState();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [objectOfDevices, setObjectOfDevices] = useState([]);

    
    const [pageAddress, setPageAddress] = useState("");
    const [githubAddress, setGithubAddress] = useState("");

    useEffect(() => {
        if(props.location.details == undefined) {
            window.location.href = "https://astankiewicz.netlify.app/";
            return;
        } else {
            setPageAddress(props.location.details.data.page_address)
            setGithubAddress(props.location.details.data.github_address)
            window.scrollTo(0, 0);
            var t1 = setTimeout(() => {
                var el = document.getElementById("defaultCanvas0");
                if(el) {
                    el.style.transform = "scale(1.2)";
                }
                clearInterval(t1);
            }, 2100);
            var t2 = setTimeout(() => {
                var el = document.getElementById("defaultCanvas0");
                if(el) {
                    el.style.transform = "scale(0.8)";
                }
                clearInterval(t2);
            }, 2400);
            var t3 = setTimeout(() => {
                var el = document.getElementById("defaultCanvas0");
                if(el) {
                    el.style.transform = "scale(1.0)";
                }
                clearInterval(t3);
            }, 2700);
            var t4 = setTimeout(() => {
                var el = document.getElementsByClassName("project-details-loading-screen")[0];
                if(el) {
                    el.style.opacity = "0";
                }
                clearInterval(t4);
            }, 3000);
            var t5 = setTimeout(() => {
                var el = document.getElementsByClassName("project-details-loading-screen")[0];
                if(el) {
                    el.remove();
                }
                clearInterval(t5);
            }, 3200);

            var tmpArrayOfDevices = Object.keys(props.location.details.data.display_devices);

            var tmpObjectArr = []
            for(var i = 0; i < tmpArrayOfDevices.length; i++) {
                tmpObjectArr.push({
                    n: i,
                    name: tmpArrayOfDevices[i],
                    images: props.location.details.data.display_devices[tmpArrayOfDevices[i]]
                })
            }

            setObjectOfDevices(tmpObjectArr);


            let tmpData = props.location.details.data;
            setDetailsData(props.location.details.data);

            setTitle(tmpData.title);
            setDescription(tmpData.description);
        }
    }, [])

    const devicesDisplay = (p) => {
        if(p.name.startsWith("computer_images")) {
            return <div className="monitor-box">
                        <h2 className="device-title">{props.location.details.data.display_headers[p.n]}</h2>
                        <div className="monitor-mockup">
                            {/*<img src={monitor} alt="Monitor mockup" />*/}
                            <Slider nth={p.n} images={p.images} deviceType={"monitor"}/>
                        </div>
                    </div>;
        } else {
            return  <div>
                        <h2 className="device-title">{props.location.details.data.display_headers[p.n]}</h2>
                        <div className="phone-mockup">
                            {/*<img src={phone} alt="Phone mockup" />*/}
                            <Slider nth={p.n} images={p.images} deviceType={"phone"}/>
                        </div>
                    </div>;
        }
    }

    function openInNewTab(address) {
        window.open(address, '_blank').focus();
    }

    return (
        <div className='project-details-bg'>
            <div className='project-details-loading-screen'>
                <div className='project-loading-centerbox'>
                    <ReactP5Wrapper sketch={sketchAnimation}/>
                </div>
            </div>
            <MenuBar />
            <div className="project-details-container">
                <div className='project-txt-container-parent'>
                    <h1 className="title-header">
                        {title}
                    </h1>
                    <div className="project-description">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                    <div className='project-details-pages-box'>
                        {
                            pageAddress != "" ?
                                <div className='project-details-page' onClick={() => openInNewTab(pageAddress)}>
                                    <div className='page-icon'>
                                        <FiExternalLink />
                                    </div>
                                    <div className='page-name'>
                                        Strona internetowa
                                    </div>
                                </div>
                            :
                                null
                        }
                        {
                            githubAddress != "" ?
                                <div className='project-details-page' onClick={() => openInNewTab(githubAddress)}>
                                    <div className='page-icon'>
                                        <FiGithub />
                                    </div>
                                    <div className='page-name'>
                                        Kod na githubie
                                    </div>
                                </div>
                            :
                                null
                        }
                        
                    </div>
                </div>
                <div className='project-details-images-container'>
                    {
                        objectOfDevices.map(p =>
                            devicesDisplay(p)
                        )
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default withRouter(ProjectDetails);
