import React, {useContext, useState} from 'react';
import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "../../../assets/icons/hamburger-pink.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import UserPreferences from "../../../components/page-components/dashboard/UserPreferences.jsx";
import "/src/scss/scss-pages/user-preferences.scss";

const PreferencesPage = () => {

    return (
        <>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamburgerIcon}/>
                </Header>

                <Main>
                    <PageTitle pageTitleClass="preferences__title" pageTitle="Voorkeuren"/>

                    <UserPreferences />

                </Main>

                <Footer/>

            </OuterContainer>

        </>
    );
};

export default PreferencesPage;