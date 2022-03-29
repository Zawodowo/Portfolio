import './../App.css';
import './../css/project.css';


import { useEffect, useState, useHover, useLayoutEffect, useRef } from "react";

import { Link } from "react-router-dom";

import ProjectDetails from './ProjectDetails.js';

import ReactLogo from './../images/react-logo.png';
import PhpLogo from './../images/php-logo.png';
import KotlinLogo from './../images/kotlin-logo.png';
import MysqlLogo from './../images/mysql-logo.png';

import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCard(props) {
    const [hoverRef, isHovered] = useHover();

    const [pageAddress, setPageAddress] = useState("");
    const [githubAddress, setGithubAddress] = useState("");


    useEffect(() => {
        setPageAddress(props.data.page_address);
        setGithubAddress(props.data.github_address);

        var hoveredCard = document.getElementById(hoverRef.current.id);
        var projectCard = document.getElementsByClassName("project-card")[hoverRef.current.id.slice(-1)-1];

        if(isHovered) {
            projectCard.style.filter = "grayscale(0%)";
            hoveredCard.style.opacity = "0";
        } else {
            projectCard.style.filter = "grayscale(100%)";
            hoveredCard.style.opacity = "0.4";
        }
    }, [isHovered])

    useEffect(() => {
        var cards = document.getElementsByClassName('project-card');
        var stringUrl = "url('" + props.data.mini_img + "')";
        cards[props.data.number-1].style.backgroundImage = stringUrl;
    }, [])

    const [width, height] = useWindowSize();

    const technologiesIcon = (p) => {
        switch(p) {
            case "react":   return <img src={ReactLogo} className="card-logos" alt="react-logo" />;
            case "kotlin":   return <img src={KotlinLogo} className="card-logos" alt="kotlin-logo" />;
            case "php": return <img src={PhpLogo} className="card-logos" alt="php-logo" />;
            case "mysql":  return <img src={MysqlLogo} className="card-logos" alt="mysql-logo" />;

            default: return null
        }
    }


    
    const [ifVisible, setIfVisible] = useState(false);
    useEffect(() => {
        if(ifVisible) return;

        var el = document.getElementById("PROJECT_" + props.data.number);
        var rect = el.getBoundingClientRect();

        if(rect.top < window.innerHeight - ((rect.bottom - rect.top) * 0.05)) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            setIfVisible(true);
        }
    }, [props.scrollY])


    function openInNewTab(address) {
        window.open(address, '_blank').focus();
    }

    return (
        <div className="project-row" id={"PROJECT_" + props.data.number}>
            {
                props.data.number % 2 == 0 ?
                    width < 820 ?
                        <Link to={{
                            pathname: "/project-details",
                            details: props
                        }}>
                            <div className='right-card-part'>
                                <div className='right-card-content'>
                                    <div className="small-description sd-right">
                                        <Link to={{
                                            pathname: "/project-details",
                                            details: props
                                        }}>
                                            <div className="title-description td-right">{props.data.title}</div>
                                        </Link>
                                        <p>{props.data.smallDescription}</p>
                                        <div className="icons-description id-right">
                                            {
                                                githubAddress != "" ?
                                                    <div className="ic-dsc-right" onClick={() => openInNewTab(githubAddress)}>
                                                        <FiGithub />
                                                    </div>
                                                :
                                                    null
                                            }
                                            {
                                                pageAddress != "" ?
                                                    <div className="ic-dsc-right" onClick={() => openInNewTab(pageAddress)}>
                                                        <FiExternalLink />
                                                    </div>
                                                :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    :
                        <div className='right-card-part'>
                            <div className='right-card-content'>
                                <div className="small-description sd-right">
                                    <Link to={{
                                        pathname: "/project-details",
                                        details: props
                                    }}>
                                        <div className="title-description td-right">{props.data.title}</div>
                                    </Link>
                                    <p>{props.data.smallDescription}</p>
                                    <div className="icons-description id-right">
                                        {
                                            githubAddress != "" ?
                                                <div className="ic-dsc-right" onClick={() => openInNewTab(githubAddress)}>
                                                    <FiGithub />
                                                </div>
                                            :
                                                null
                                        }
                                        {
                                            pageAddress != "" ?
                                                <div className="ic-dsc-right" onClick={() => openInNewTab(pageAddress)}>
                                                    <FiExternalLink />
                                                </div>
                                            :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                :
                    width < 820 ?
                        <Link to={{
                            pathname: "/project-details",
                            details: props
                        }}>
                            <div className='left-card-part'>
                                <div className='left-card-content'>
                                    <div className="small-description sd-left">
                                        <Link to={{
                                            pathname: "/project-details",
                                            details: props
                                        }}>
                                            <div className="title-description td-left">{props.data.title}</div>
                                        </Link>
                                        <p>{props.data.smallDescription}</p>
                                        <div className="icons-description id-left">
                                            {
                                                githubAddress != "" ?
                                                    <div className="ic-dsc-left" onClick={() => openInNewTab(githubAddress)}>
                                                        <FiGithub />
                                                    </div>
                                                :
                                                    null
                                            }
                                            {
                                                pageAddress != "" ?
                                                    <div className="ic-dsc-left" onClick={() => openInNewTab(pageAddress)}>
                                                        <FiExternalLink />
                                                    </div>
                                                :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    :
                        <div className='left-card-part'>
                            <div className='left-card-content'>
                                <div className="small-description sd-left">
                                    <Link to={{
                                        pathname: "/project-details",
                                        details: props
                                    }}>
                                        <div className="title-description td-left">{props.data.title}</div>
                                    </Link>
                                    <p>{props.data.smallDescription}</p>
                                    <div className="icons-description id-left">
                                        {
                                            githubAddress != "" ?
                                                <div className="ic-dsc-left" onClick={() => openInNewTab(githubAddress)}>
                                                    <FiGithub />
                                                </div>
                                            :
                                                null
                                        }
                                        {
                                            pageAddress != "" ?
                                                <div className="ic-dsc-left" onClick={() => openInNewTab(pageAddress)}>
                                                    <FiExternalLink />
                                                </div>
                                            :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
            }

        {
            props.data.number % 2 == 0 ?
                <Link to={{
                    pathname: "/project-details",
                    details: props
                  }}>
                      
                      <div className="project-card-cover cv-l" id={"cover" + props.data.number} ref={hoverRef} />
                      <div className="project-card-cover-mobile cv-l" id={"cover" + props.data.number} />
                    <div className="project-card left-card">
                        <div className="card-technologies">
                            {
                                props.data.technologies.map(p =>
                                    technologiesIcon(p)
                                )
                            }
                        </div>
                    </div>
                </Link>
            :
                <Link to={{
                    pathname: "/project-details",
                    details: props
                  }}>
                    <div className="project-card-cover cv-r" id={"cover" + props.data.number} ref={hoverRef} />
                    <div className="project-card-cover-mobile cv-l" id={"cover" + props.data.number} />
                    <div className="project-card right-card">
                        <div className="card-technologies">
                            {
                                props.data.technologies.map(p =>
                                    technologiesIcon(p)
                                )
                            }
                        </div>
                    </div>
                </Link>
        }
        </div>
    );

    function useHover() {
        const [value, setValue] = useState(false);
        const ref = useRef(null);
        const handleMouseOver = () => setValue(true);
        const handleMouseOut = () => setValue(false);
        useEffect(
          () => {
            const node = ref.current;
            if (node) {
              node.addEventListener("mouseover", handleMouseOver);
              node.addEventListener("mouseout", handleMouseOut);
              return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
              };
            }
          },
          [ref.current]
        );
        return [ref, value];
    }


    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
}




export default ProjectCard;
