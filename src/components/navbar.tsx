import '../Style/styles.css';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserLarge, faBriefcase, faEnvelope, faAdjust, } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";

function Navbar() {
    const [style, setStyle] = useState("cont");
    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("control active-btn");
    };
    return (

        <div>
            <div className="controls">
                <Link to='/portfolio' onClick={changeStyle}>
                    <div className="control" data-id="home"  >
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                </Link>
                <Link to='/profile' onClick={changeStyle}>
                    <div className="control" data-id="profile">
                        <FontAwesomeIcon icon={faUserLarge} />
                    </div>
                </Link>
                <Link to='/contact' onClick={changeStyle}>
                    <div className="control" data-id="contact">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar