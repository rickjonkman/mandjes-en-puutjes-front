import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "/src/assets/icons/hamburger-green.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Footer from "../../../components/structure/Footer.jsx";


const SurpriseRecipePage = () => {
    return (
        <>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamburgerIcon} />
                </Header>

                <Main>
                    <PageTitle pageTitleClass="surprise-recipe__title" pageTitle="Verrassingsrecept" />
                </Main>

                <Footer />

            </OuterContainer>
        </>
    );
};

export default SurpriseRecipePage;