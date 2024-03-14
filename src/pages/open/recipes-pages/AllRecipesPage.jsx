import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import HamburgerIcon from "../../../assets/icons/hamburger-green.svg";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import {useEffect, useState} from "react";
import RecipeThumbnail from "../../../components/page-components/recipes/RecipeThumbnail.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "/src/scss/scss-pages/all-recipes.scss";


const AllRecipesPage = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        void fetchAllRecipes();
        return console.log("AllRecipesPage useEffect cleanup")
    }, []);

    const fetchAllRecipes = async () => {

        const url = `http://localhost:8080/api/v1/recipes/get-thumbnails`;
        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(url);
            setAllRecipes(response.data);
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    return (

        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon}/>
            </Header>

            <Main>
                {error && <div>Er is iets misgegaan: {error.message}</div>}
                {isLoading && <div>Even geduld, recepten worden geladen...</div>}

                <PageTitle pageTitleClass="recipes-all__title" pageTitle="Alle recepten"/>

                <div className="recipes-all__grid">
                    {
                        allRecipes.map((recipe) => {
                            return (
                                <RecipeThumbnail
                                    key={recipe.recipeId}
                                    recipeName={recipe.recipeName}
                                    tags={recipe.tagDTOList}
                                    recipeImage={recipe.imageFileName}
                                    recipeImageDescription={recipe.recipeImageDescription}
                                    buttonClickHandler={() => navigate(`/recipes/main`)}
                                />
                            )
                        })
                    }
                </div>

            </Main>

        </OuterContainer>
    );
};

export default AllRecipesPage;