import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import HamburgerIcon from "../../../assets/icons/hamburger-green.svg";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import "/src/scss/scss-pages/all-recipes.scss";
import Footer from "../../../components/structure/Footer.jsx";
import RecipeContextProvider from "../../../context/RecipeContext.jsx";
import RecipeThumbnailsContainer
    from "../../../components/page-components/recipes/all-recipes/RecipeThumbnailsContainer.jsx";


const AllRecipesPage = () => {



    return (

        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon}/>
            </Header>

            <Main>

                <PageTitle pageTitleClass="recipes-all__title" pageTitle="Alle recepten"/>

                <RecipeContextProvider>
                    <RecipeThumbnailsContainer />
                </RecipeContextProvider>

            </Main>

            <Footer/>

        </OuterContainer>
    );
};

export default AllRecipesPage;