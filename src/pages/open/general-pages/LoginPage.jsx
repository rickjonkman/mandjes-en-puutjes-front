import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import PageTitle from "../../../components/page-title/PageTitle.jsx";
import Form from "../../../components/forms/register-login/Form.jsx";
import IconButton from "../../../components/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import GoBackIcon from "/src/assets/icons/chevron-off-white.svg";
import SubmitButton from "../../../components/buttons/SubmitButton.jsx";
import {useContext, useEffect, useState} from "react";
import usePostRequest from "../../../hooks/usePostRequest.js";
import ErrorPage from "../../util-pages/ErrorPage.jsx";
import LoadingPage from "../../util-pages/LoadingPage.jsx";
import {UserContext} from "../../../context/UserContext.jsx";


const LoginPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {postRequest, result, error, isLoading} = usePostRequest('http://localhost:8080/api/v1/users/authenticate');
    const { login } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            password: password,
        }

        await postRequest(formData);
        if (result) {
            login(`${result}`);
        }
    }



    if (error) return <ErrorPage error={error}/>
    if (isLoading) return <LoadingPage/>

    return (
        <>
            <OuterContainer>

                <Header>
                    <PageTitle pageTitleClass="login-register__title" pageTitle="Inloggen"/>
                </Header>

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


            </OuterContainer>
        </>
    );
};

export default LoginPage;