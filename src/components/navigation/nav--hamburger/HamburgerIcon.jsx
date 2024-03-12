
const HamburgerIcon = ({ hamburgerIcon, hamClickHandler }) => {



    return (
        <div className="nav-bar__main-pages--hamburger">

            <img
                src={hamburgerIcon}
                alt="hamburger-icon, klik om menu te openen."
                id="nav-bar__ham-icon"
                onClick={hamClickHandler}
            />

        </div>
    );
};

export default HamburgerIcon;