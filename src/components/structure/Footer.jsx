import "/src/scss/page-structure.scss";

const Footer = ({ children }) => {
    return (
        <footer className="footer-class">
            {children}
        </footer>
    );
};

export default Footer;