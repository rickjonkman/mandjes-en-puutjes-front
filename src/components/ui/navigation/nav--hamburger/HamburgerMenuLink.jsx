import React from 'react';
import {NavLink} from "react-router-dom";

const HamburgerMenuLink = ({ linkTo, linkText, children }) => {



    return (
        <li>
            <NavLink
                to={linkTo}>
                <h2>{linkText}</h2>
                {children}
            </NavLink>
        </li>
    );
};

export default HamburgerMenuLink;