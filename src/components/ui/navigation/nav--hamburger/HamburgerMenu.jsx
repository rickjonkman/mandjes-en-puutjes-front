
import CloseIcon from "/src/assets/icons/close-icon.svg";
import "/src/scss/nav.scss";
import HamburgerMenuLinks from "./HamburgerMenuLinks.jsx";
import {useContext} from "react";
import {AuthContext} from "../../../../context/AuthContext.jsx";
import {linksAuthenticated} from "../../../../constants/linksAuthenticated.js";
import {linksNotAuthenticated} from "../../../../constants/linksNotAuthenticated.js";


const HamburgerMenu = ({ setIsMenuOpen, color }) => {

    const { authenticated } = useContext(AuthContext);

    return (
        <div className={`hamburger__full-menu--${color}`}>

            <div className="hamburger--menu-title">
                <h1>Menu</h1>
                <img
                    src={CloseIcon}
                    alt="Klik om het menu te sluiten"
                    id="hamburger__close-icon"
                    onClick={() => setIsMenuOpen(false)}
                />
            </div>

            <div className="hamburger--menu-links">

                <HamburgerMenuLinks hamLinks={authenticated ? linksAuthenticated : linksNotAuthenticated} />

            </div>
        </div>
    );
};

export default HamburgerMenu;