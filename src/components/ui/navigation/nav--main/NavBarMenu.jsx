
import {NavLink} from "react-router-dom";
import NavBarLink from "./NavBarLink.jsx";

const NavBarMenu = ({ navItems }) => {

    return (
        <div className="nav-bar__menu">

            <ul>
                {
                    navItems.map((item, index) => {
                        return (
                            <NavBarLink
                                key={index}
                                navEndpoint={item.link}
                                navLabel={item.linkText}
                            />
                        )

                    })
                }
            </ul>

        </div>
    );
};

export default NavBarMenu;