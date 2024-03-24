import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "/src/assets/icons/hamburger-blue.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import GroceriesContextProvider from "../../../context/ShoppingModeContext.jsx";
import RecentListsContainer from "../../../components/page-components/groceries/recent-lists/RecentListsContainer.jsx";


const RecentListsPage = () => {

    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon} />
            </Header>

            <Main>
                <PageTitle pageTitleClass="groceries-recent-lists__title" pageTitle="Recente lijsten" />

                <GroceriesContextProvider>
                    <RecentListsContainer />
                </GroceriesContextProvider>

            </Main>

            <Footer />

        </OuterContainer>
    );
};

export default RecentListsPage;