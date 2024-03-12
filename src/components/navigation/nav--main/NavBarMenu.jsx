const NavBarMenu = ({ children }) => {
    return (
        <div className="nav-bar__menu">
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default NavBarMenu;