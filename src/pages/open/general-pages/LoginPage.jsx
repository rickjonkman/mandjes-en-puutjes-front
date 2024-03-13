import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import PageTitle from "../../../components/page-title/PageTitle.jsx";
import Form from "../../../components/forms/Form.jsx";
import IconButton from "../../../components/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import GoBackIcon from "/src/assets/icons/chevron-off-white.svg";
import SubmitButton from "../../../components/buttons/SubmitButton.jsx";
import {useContext, useState} from "react";
import "/src/scss/scss-pages/login-register.scss";
import Main from "../../../components/structure/Main.jsx";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext.jsx";
import {isTokenExpired} from "../../../helpers/isTokenExpired.js";


const LoginPage = () => {

    const navigate = useNavigate();
    const { authenticate } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        authenticate(username, password);

        const token = localStorage.getItem('token');

        if (token && isTokenExpired(token)) {
            navigate('/general/dashboard');
        }
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


            </OuterContainer>
        </>
    );
};

export default LoginPage;