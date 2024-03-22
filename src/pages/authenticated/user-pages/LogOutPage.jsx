import React, {useContext} from 'react';
import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "../../../assets/icons/hamburger-pink.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import DefaultButton from "../../../components/ui/buttons/DefaultButton.jsx";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import "/src/scss/scss-pages/login-register.scss";

const LogOutPage = () => {

    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    const handleLogOut = (e) => {
        e.preventDefault();
        logOut();
        navigate('/general/login');
        console.log('Logout completed');
    }

    return (
        <OuterContainer>
            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon}/>
            </Header>

            <Main>
                <PageTitle pageTitleClass="login-register__title" pageTitle="Uitloggen"/>

                <div className="login-register-form__container">
                    <h2>Weet je zeker dat je wilt uitloggen?</h2>

                    <div className="logout__buttons">
                        <DefaultButton
                            buttonClass="button__logout"
                            buttonText="Ja, ik wil uitloggen"
                            onClickHandler={(e) => handleLogOut(e)}
                        />

                        <DefaultButton
                            buttonClass="button__logout"
                            buttonText="Nee, ga terug"
                            onClickHandler={() => navigate('/general/dashboard')}
                        />
                    </div>

                </div>

            </Main>

            <Footer/>
        </OuterContainer>
    );
};

export default LogOutPage;