import React from 'react';
import {NavLink} from "react-router-dom";

const HamburgerMenuChildLink = ({ linkTo, linkText }) => {



    return (
        <li>
            <NavLink to={linkTo} className="hamburger-menu__link">
                <p>{linkText}</p>
            </NavLink>
        </li>
    );
};

export default HamburgerMenuChildLink;