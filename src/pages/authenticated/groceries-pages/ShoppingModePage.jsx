import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-blue.svg";
import Main from "../../../components/structure/Main.jsx";
import "/src/scss/scss-pages/groceries-shoppingmode.scss";
import GroceriesContextProvider from "../../../context/ShoppingModeContext.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import ShoppingModeMenu from "../../../components/page-components/groceries/shopping-mode/ShoppingModeMenu.jsx";
import ShoppingModeContextProvider from "../../../context/ShoppingModeContext.jsx";
import ShoppingList from "../../../components/page-components/groceries/shopping-mode/ShoppingList.jsx";


const ShoppingModePage = () => {



    return (
        <GroceriesContextProvider>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamIcon}/>
                </Header>

                <Main>

                    <PageTitle
                        pageTitleClass="groceries-shopping-mode__title"
                        pageTitle="Winkelmodus"
                    />

                    <ShoppingModeContextProvider>
                        <div className="groceries-shopping-mode__container">


                            <ShoppingModeMenu/>

                            <ShoppingList />

                        </div>
                    </ShoppingModeContextProvider>

                </Main>

            </OuterContainer>

            <Footer/>
        </GroceriesContextProvider>
    )
        ;
};

export default ShoppingModePage;