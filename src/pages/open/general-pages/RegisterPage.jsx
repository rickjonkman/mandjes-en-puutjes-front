import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import PageTitle from "../../../components/page-title/PageTitle.jsx";
import Main from "../../../components/structure/Main.jsx";
import GoBackIcon from "../../../assets/icons/chevron-off-white.svg";
import IconButton from "../../../components/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import Form from "../../../components/forms/register-login/Form.jsx";
import {useContext, useState} from "react";
import FormInput from "../../../components/forms/register-login/FormInput.jsx";
import SubmitButton from "../../../components/buttons/SubmitButton.jsx";
import usePostRequest from "../../../hooks/usePostRequest.js";
import ErrorPage from "../../util-pages/ErrorPage.jsx";
import LoadingPage from "../../util-pages/LoadingPage.jsx";
import {UserContext} from "../../../context/UserContext.jsx";


const RegisterPage = () => {

    const [formState, setFormState] = useState({
        username: '',
        password: '',
        firstname: '',
        enabled: true,
    });

    const {postRequest, result, error, isLoading} = usePostRequest('http://localhost:8080/api/v1/users/register');
    const { isAuth, setIsAuth } = useContext(UserContext);

    function handleInputChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: formState.username,
            password: formState.password,
            firstname: formState.firstname,
            enabled: formState.enabled,
        }

        await postRequest(formData);
        setIsAuth({
            ...isAuth,
            result
        });

    }


    const navigate = useNavigate();

    if (error) return <ErrorPage error={error}/>
    if (isLoading) return <LoadingPage/>

    return (
        <OuterContainer>

            <Header>
                <PageTitle pageTitleClass="login-register__title" pageTitle="Registreren" />
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

                        <FormInput
                            inputType="email"
                            labelText="Gebruikersnaam:"
                            inputId="register__form--username"
                            inputName="username"
                            inputValue={formState.username}
                            inputChangeHandler={handleInputChange}
                        />

                        <FormInput
                            inputType="password"
                            labelText="Wachtwoord:"
                            inputId="register__form--password"
                            inputName="password"
                            inputValue={formState.password}
                            inputChangeHandler={handleInputChange}
                        />

                        <FormInput
                            inputType="text"
                            labelText="Voornaam:"
                            inputId="register__form--firstname"
                            inputName="firstname"
                            inputValue={formState.firstname}
                            inputChangeHandler={handleInputChange}
                        />

                        <SubmitButton
                            buttonClass="register-login__form--submit"
                            buttonType="submit"
                            buttonText="Registreren"
                        />

                    </Form>

                </div>

            </Main>

        </OuterContainer>
    );
};

export default RegisterPage;