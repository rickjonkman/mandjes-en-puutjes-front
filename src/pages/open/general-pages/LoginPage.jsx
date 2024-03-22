import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Form from "../../../components/ui/forms/Form.jsx";
import IconButton from "../../../components/ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import GoBackIcon from "/src/assets/icons/chevron-off-white.svg";
import SubmitButton from "../../../components/ui/buttons/SubmitButton.jsx";
import {useContext, useState} from "react";
import "/src/scss/scss-pages/login-register.scss";
import Main from "../../../components/structure/Main.jsx";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext.jsx";
import {isTokenExpired} from "../../../helpers/isTokenExpired.js";
import Footer from "../../../components/structure/Footer.jsx";


const LoginPage = () => {

    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);

    const { authenticate } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isUserRegistered = (searchParams) => {
        if (searchParams.get('registration-success') === 'true') {
            return (
                <p className="login-register__form--success">Registratie gelukt! Je kunt nu inloggen.</p>
            )
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        authenticate(username, password);
    }


    return (
        <>
            <OuterContainer>

                <Header>
                    <PageTitle pageTitleClass="login-register__title" pageTitle="Inloggen"/>
                </Header>

                <Main>

                    <div className="login-register-form__container">

                        <IconButton
                            buttonId="button__go-back"
                            buttonClickHandler={() => navigate('/')}
                            iconSrc={GoBackIcon}
                            iconDescription="Ga terug"
                            iconId="icon__go-back"
                        />

                        <Form formClass="login-register__form" formSubmitHandler={(e) => handleSubmit(e)}>
                            {isUserRegistered(searchParams)}

                            <label htmlFor="login__form--username"> Gebruikersnaam:
                                <input
                                    type="email"
                                    id="login__form--username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>

                            <label htmlFor="login__form--password"> Wachtwoord:
                                <input
                                    type="password"
                                    id="login__form--password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>

                            <SubmitButton
                                buttonClass="register-login__form--submit"
                                buttonText="Inloggen"
                                buttonType="submit"
                            />

                        </Form>
                    </div>

                </Main>

                <Footer />


            </OuterContainer>
        </>
    );
};

export default LoginPage;