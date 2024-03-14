import "/src/scss/page-structure.scss";
import IconButton from "../ui/buttons/IconButton.jsx";
import Github from "../../assets/icons/github-icon.svg";
import LinkedIn from "../../assets/icons/linkedin-icon.svg";
import Novi from "../../assets/icons/novi-icon.png";
import {useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="footer-class">

            <section className="footer__text-section">
                <h4>Deze pagina is ontworpen en gebouwd door Rick Jonkman</h4>
                <p>© 2024</p>
            </section>

            <section className="footer__icons-section">
                <IconButton
                    icon="github"
                    iconDescription="Github"
                    buttonId="footer--icon"
                    iconSrc={Github}
                    iconId="footer--github-icon"
                    buttonClickHandler={() => navigate("http://wwww.github.com/rickjonkman")}
                />
                <IconButton
                    icon="github"
                    iconDescription="LinkedIn"
                    buttonId="footer--icon"
                    iconSrc={LinkedIn}
                    iconId="footer--linkedin-icon"
                    buttonClickHandler={() => navigate("http://wwww.linkedin.com/in/rick-jonkman")}
                />
                <IconButton
                    icon="github"
                    iconDescription="Novi"
                    buttonId="footer--novi-button"
                    iconSrc={Novi}
                    iconId="footer--novi-icon"
                    buttonClickHandler={() => navigate("http://wwww.novi.nl")}
                />
            </section>

        </footer>
    );
};

export default Footer;