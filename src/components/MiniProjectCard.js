import './../App.css';
import './../css/project.css';
import { useEffect, useState, useHover, useRef } from "react";

import { Link } from "react-router-dom";

import ProjectDetails from './ProjectDetails.js';

import ReactLogo from './../images/react-logo.png';
import PhpLogo from './../images/php-logo.png';
import KotlinLogo from './../images/kotlin-logo.png';
import MysqlLogo from './../images/mysql-logo.png';

import { AiOutlineProject } from 'react-icons/ai';

import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

import { SiReact, SiJavascript, SiKotlin, SiPhp, SiMysql, SiPython, SiNodedotjs } from 'react-icons/si';

function MiniProjectCard(props) {
    const [hoverRef, isHovered] = useHover();

    const [mainAddress, setMainAddress] = useState("");

    useEffect(() => {
        if(props.data.page_link != "") {
            console.log(props.data.page_link)
            setMainAddress(props.data.page_link);
        } else if(props.data.github_link != "") {
            console.log(props.data.github_link)
            setMainAddress(props.data.github_link);
        }
    }, [])

    const technologiesIcon = (p) => {
        switch(p) {
            case "react":   return <SiReact />
            case "kotlin":  return <SiKotlin />
            case "php":     return <SiPhp />
            case "mysql":   return <SiMysql />
            case "python":   return <SiPython />
            case "nodejs":   return <SiNodedotjs />
            case "js":   return <SiJavascript />

            default: return null
        }
    }

    const [ifVisible, setIfVisible] = useState(false);
    useEffect(() => {
        if(ifVisible) return;

        var el = document.getElementById("MINI_PROJECT_" + props.data.number);
        var rect = el.getBoundingClientRect();

        if(rect.top < window.innerHeight - ((rect.bottom - rect.top) * 0.05)) {
            var delay;
            if(props.data.number%3 == 1) { //pierwsza kolumna z lewej na 3
                delay = 0;
            } else if (props.data.number%3 == 2) { //druga kolumna z lewej na 3
                delay = 200;
            } else { //trzecia kolumna z lewej na 3
                delay = 400;
            }
            setTimeout(function() {
                el.style.opacity = "1";
                el.style.transform = "translateY(0px)";
                setIfVisible(true);
            }, delay);
        }
    }, [props.scrollY])

    function openInNewTab(address) {
        window.open(address, '_blank');
    }
    return (
        <div className="mini-project-card" id={"MINI_PROJECT_" + props.data.number} ref={hoverRef} 
            onClick={(e) => {
                                e.stopPropagation(); 
                                openInNewTab(mainAddress);
                            }}>

            <div className='mini-top-icons'>
                <AiOutlineProject className="proj-ic" />
                {
                    props.data.page_link != "" ?
                        <FiExternalLink className="page-ic" 
                        onClick={(e) => {
                            e.stopPropagation();  
                            openInNewTab(props.data.page_link);
                        }} />
                    :
                        null
                }
                {
                    props.data.github_link != "" ?
                        <FiGithub className="gh-ic" 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            openInNewTab(props.data.github_link);
                        }} />
                    :
                        null
                }
            </div>
            <div className='mini-title'>
                {props.data.title}
            </div>

            <div className='mini-description'>
                {props.data.smallDescription}
            </div>
            <div className="mini-technologies">
                {
                    props.data.technologies.map(p =>
                        technologiesIcon(p)
                    )
                }
            </div>
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
}




export default MiniProjectCard;
