import {allPages} from "../../../constants/allPages.js";
import {NavLink} from "react-router-dom";
import CloseIcon from "/src/assets/icons/close-icon.svg";
import "/src/scss/nav.scss";


const HamburgerMenu = ({ setIsMenuOpen, color }) => {


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

                <ul>

                    {
                        allPages.map((page) => {
                            return (
                                <li key={page.id}>
                                    <NavLink to={page.navLink}><h2>{page.title}</h2></NavLink>

                                    {
                                        page.subPages.length > 0 &&
                                        <ul>
                                            {
                                                page.subPages.map((subPage) => {
                                                    return (
                                                        <li key={subPage.id}>
                                                            <NavLink to={subPage.navLink}><p>{subPage.title}</p></NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }

                                </li>
                            )
                        })
                    }

                </ul>

            </div>
        </div>
    );
};

export default HamburgerMenu;