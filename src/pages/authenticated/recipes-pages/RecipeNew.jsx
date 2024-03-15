import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "/src/assets/icons/hamburger-green.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import NewRecipeForm from "../../../components/page-components/recipes/new-recipe/NewRecipeForm.jsx";
import "/src/scss/scss-pages/new-recipe.scss";


const RecipeNew = () => {
    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon} />
            </Header>

            <Main>
                <PageTitle pageTitleClass="recipes-new__title" pageTitle="Nieuw recept" />

                <NewRecipeForm />
            </Main>

            <Footer />

        </OuterContainer>
    );
};

export default RecipeNew;