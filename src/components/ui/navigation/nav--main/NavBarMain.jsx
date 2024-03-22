import {useContext, useState} from "react";
import Logo from "../../../../assets/svg/logo--dark-color.svg";
import ImageWrapper from "../../image/ImageWrapper.jsx";
import NavBarMenu from "./NavBarMenu.jsx";
import {menuItems} from "../../../../constants/menuItems.js";
import HamburgerIcon from "../nav--hamburger/HamburgerIcon.jsx";
import "/src/scss/nav.scss";
import HamburgerMenu from "../nav--hamburger/HamburgerMenu.jsx";
import {ThemeColorContext} from "../../../../context/ThemeColorContext.jsx";
import {AuthContext} from "../../../../context/AuthContext.jsx";
import {menuItemsAuth} from "../../../../constants/menuItemsAuth.js";
import {useNavigate} from "react-router-dom";


const NavBarMain = ({ hamburgerIcon }) => {

    const { authenticated } = useContext(AuthContext);
    const { color } = useContext(ThemeColorContext);
    const navigate = useNavigate();
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
                    handleOnClick={() => navigate('/')}
                />

                <NavBarMenu navItems={authenticated ? menuItems : menuItemsAuth}/>

                <HamburgerIcon
                    hamburgerIcon={hamburgerIcon}
                    hamClickHandler={e => hamIconClickHandler(e)}
                />

            </nav>

            {
                isMenuOpen &&
                <HamburgerMenu
                    setIsMenuOpen={setIsMenuOpen}
                    color={color}
                />
            }

        </div>
    );
};

export default NavBarMain;