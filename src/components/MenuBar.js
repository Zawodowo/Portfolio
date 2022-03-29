import './../css/menu.css';
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineProject } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';

function MenuBar(props) {
    const [ifVisible, setIfVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(-1000);

    useEffect(() => {
        if(prevScrollPos == -1000) {
            setPrevScrollPos(props.scrollY);
            return;
        }

        var menuBar = document.getElementsByClassName("menu-container")[0];
        if(prevScrollPos > props.scrollY && !ifVisible) { //unhide
            menuBar.style.transform = "translateY(0)";
            setIfVisible(true);
        } else if(prevScrollPos < props.scrollY && ifVisible) { //hide
            menuBar.style.transform = "translateY(-70px)";
            setIfVisible(false);
        }
        setPrevScrollPos(props.scrollY);
    }, [props.scrollY])

    function scrollToEl(el) {
        if(window.location.pathname == "/project-details") {
            return;
        }
        const scrollElement = document.getElementsByClassName(el)[0];
        console.log(scrollElement.offsetTop);
        window.scroll(0, scrollElement.offsetTop);
    }

    return (
        <div className="menu-container">
            <div className='menu-box'>
                <div className="menu-list">
                    <Link to={{
                            pathname: "/",
                            details: props
                        }}>
                        <div className="menu-item i-mr" onClick={() => scrollToEl("front-page")}>
                            <AiOutlineHome />
                            <div className="menu-item-txt">
                                Home
                            </div>
                        </div>
                    </Link>

                    <Link to={{
                            pathname: "/",
                            hash: "#projects",
                            details: props
                        }}>
                        <div className="menu-item i-mr" onClick={() => scrollToEl("projects-container-bg")}>
                            <AiOutlineProject />
                            <div className="menu-item-txt">
                                Projects
                            </div>
                        </div>
                    </Link>

                    <Link to={{
                            pathname: "/",
                            hash: "#contact",
                            details: props
                        }}>
                        <div className="menu-item" onClick={() => scrollToEl("contact-container-bg")}>
                            <AiOutlineContacts />
                            <div className="menu-item-txt">
                                Contact
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
