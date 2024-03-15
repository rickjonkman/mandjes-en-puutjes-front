import OuterContainer from "../../components/structure/OuterContainer.jsx";
import Main from "../../components/structure/Main.jsx";
import "/src/scss/utility-components.scss";
import DefaultButton from "../../components/ui/buttons/DefaultButton.jsx";
import {useNavigate} from "react-router-dom";
import TextButton from "../../components/ui/buttons/TextButton.jsx";
import Header from "../../components/structure/Header.jsx";


const PleaseRegister = () => {

    const navigate = useNavigate();

    return (
        <OuterContainer>

            <Header>

                <div className="error-page__401--header">

                    <h1>401 - Geen toegang</h1>
                    <h2>Je moet ingelogd zijn om deze pagina te kunnen bekijken</h2>

                </div>

            </Header>

            <Main>
                <div className="error-page__401--main">

                    <div className="error-page__401--buttons">

                        <DefaultButton
                            buttonClass="error-page__button"
                            buttonText="Log in"
                            onClickHandler={() => navigate("/general/login")}
                        />

                        <DefaultButton
                            buttonClass="error-page__button"
                            buttonText="Registreer"
                            onClickHandler={() => navigate("/general/register")}
                        />

                    </div>

                    <div className="error-page__401--text">
                        <p>of</p>
                        <TextButton
                            buttonClass="error-page__text-button"
                            buttonText="Ga terug naar de homepage"
                            buttonClickHandler={() => navigate("/")}
                        />
                    </div>
                </div>

            </Main>

        </OuterContainer>
    );
};

export default PleaseRegister;