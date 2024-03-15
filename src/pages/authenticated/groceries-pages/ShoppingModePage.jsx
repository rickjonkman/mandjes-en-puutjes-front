import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-blue.svg";
import Main from "../../../components/structure/Main.jsx";
import "/src/scss/scss-pages/groceries.scss";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import GroceriesMenu from "../../../components/page-components/groceries/shopping-mode/GroceriesMenu.jsx";
import ShoppingList from "../../../components/page-components/groceries/shopping-mode/ShoppingList.jsx";
import GroceriesContextProvider from "../../../context/GroceriesContext.jsx";
import Footer from "../../../components/structure/Footer.jsx";


const ShoppingModePage = () => {


    return (
        <GroceriesContextProvider>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamIcon}/>
                </Header>

                <Main>


                    <PageTitle pageTitleClass='groceries-shopping-mode__title' pageTitle="Winkelmodus"/>

                    <GroceriesContextProvider>
                        <GroceriesMenu/>


                        <ShoppingList shoppingListTitle="Huidige lijst"/>
                    </GroceriesContextProvider>

                </Main>

            </OuterContainer>

            <Footer />
        </GroceriesContextProvider>
    )
        ;
};

export default ShoppingModePage;