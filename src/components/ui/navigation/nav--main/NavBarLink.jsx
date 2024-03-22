import React from 'react';
import {NavLink} from "react-router-dom";

const NavBarLink = ({ navEndpoint, navLabel }) => {



    return (
        <li>
            <NavLink
                to={navEndpoint}
                className={({ isActive }) =>
                    isActive ? 'active-menu-link' : 'default-menu-link'}>

                { navLabel }

            </NavLink>
        </li>
    );
};

export default NavBarLink;