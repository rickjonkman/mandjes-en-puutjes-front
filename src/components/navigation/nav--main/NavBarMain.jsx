import {useState} from "react";
import Logo from "../../../assets/svg/logo--dark-color.svg";
import ImageWrapper from "../../image/ImageWrapper.jsx";
import NavBarMenu from "./NavBarMenu.jsx";
import {menuItems} from "../../../constants/menuItems.js";
import {NavLink} from "react-router-dom";
import HamburgerIcon from "../nav--hamburger/HamburgerIcon.jsx";


const NavBarMain = ({ hamburgerIcon }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hamIconClickHandler = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="nav-visibility">

            <nav className={isMenuOpen ? 'nav-hidden' : 'nav-bar'}>

                <ImageWrapper
                    imgSource={Logo}
                    imgWrapperClass="nav-bar__main-pages--logo-section"
                    imgId="nav-bar__logo"
                    imgDescription="Ons logo"
                />

                <NavBarMenu>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.link}>{item.linkText}</NavLink>
                                </li>
                            );
                        })
                    }
                </NavBarMenu>

                <HamburgerIcon
                    hamburgerIcon={hamburgerIcon}
                    hamClickHandler={e => hamIconClickHandler(e)}
                />

            </nav>

        </div>
    );
};

export default NavBarMain;