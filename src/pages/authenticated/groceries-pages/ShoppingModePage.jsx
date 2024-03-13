import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-blue.svg";
import Main from "../../../components/structure/Main.jsx";
import "/src/scss/scss-pages/groceries.scss";
import PageTitle from "../../../components/page-title/PageTitle.jsx";
import GroceriesMenu from "../../../components/shopping-lists/GroceriesMenu.jsx";
import ShoppingList from "../../../components/shopping-lists/ShoppingList.jsx";


const ShoppingModePage = () => {



    return (
        <>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamIcon}/>
                </Header>

                <Main>

                    <PageTitle pageTitleClass='groceries-shopping-mode__title' pageTitle="Winkelmodus"/>

                    <GroceriesMenu />

                    <ShoppingList shoppingListTitle="Huidige lijst" />

                </Main>

            </OuterContainer>
        </>
    )
        ;
};

export default ShoppingModePage;