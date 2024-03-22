import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Main from "../../../components/structure/Main.jsx";
import GoBackIcon from "../../../assets/icons/chevron-off-white.svg";
import IconButton from "../../../components/ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import Footer from "../../../components/structure/Footer.jsx";
import RegisterForm from "../../../components/page-components/register-page/RegisterForm.jsx";


const RegisterPage = () => {

    const navigate = useNavigate();


    return (
        <OuterContainer>

            <Header>
                <PageTitle pageTitleClass="login-register__title" pageTitle="Registreren"/>
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

                    <RegisterForm />

                </div>

            </Main>

            <Footer/>

        </OuterContainer>
    );
};

export default RegisterPage;