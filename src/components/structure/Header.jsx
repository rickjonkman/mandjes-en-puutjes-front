import "/src/scss/page-structure.scss";

const Header = ({ children }) => {
    return (
        <header className="header-class">
            {children}
        </header>
    );
};

export default Header;