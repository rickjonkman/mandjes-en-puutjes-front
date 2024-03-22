
import HamburgerMenuLink from "./HamburgerMenuLink.jsx";
import HamburgerMenuChildLink from "./HamburgerMenuChildLink.jsx";

const HamburgerMenuLinks = ({ hamLinks }) => {


    return (
        <div className="hamburger-menu__links">
            <ul>
                {
                    hamLinks.map((link) => (
                        <HamburgerMenuLink key={link.id} linkTo={link.navLink} linkText={link.title} >

                            {
                                link.subPages.length > 0 &&
                                <ul>
                                    {
                                        link.subPages.map((subLink) => (
                                            <HamburgerMenuChildLink
                                                key={subLink.id}
                                                linkTo={subLink.navLink}
                                                linkText={subLink.title}
                                            />
                                        ))
                                    }
                                </ul>
                            }

                        </HamburgerMenuLink>
                    ))
                }
            </ul>
        </div>
    );
};

export default HamburgerMenuLinks;