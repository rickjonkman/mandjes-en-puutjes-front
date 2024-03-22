import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-green.svg";
import Main from "../../../components/structure/Main.jsx";
import RecipePageHeader from "../../../components/page-components/recipes/recipe-page/RecipePageHeader.jsx";
import "../../../scss/scss-pages/recipe-page.scss";
import Footer from "../../../components/structure/Footer.jsx";
import axios from "axios";
import RecipePageMidSection from "../../../components/page-components/recipes/recipe-page/RecipePageMidSection.jsx";
import {recipeModel} from "../../../models/recipeModel.js";


const RecipePage = () => {

    const [isLoading, toggleIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [singleRecipe, setSingleRecipe] = useState(recipeModel);

    const {recipeId} = useParams();
    const fetchRecipeURL = `http://localhost:8080/api/v1/recipes/get-recipe/${recipeId}`;

    useEffect(() => {
        void fetchSingleRecipe();
    }, []);

    const fetchSingleRecipe = async () => {

        setError(null);
        toggleIsLoading(true);

        try {
            const response = await axios.get(fetchRecipeURL);
            console.log(response);
            setSingleRecipe(response.data);
        } catch (e) {
            console.error("Error fetching single recipe: ", e);
            setError(e);
        } finally {
            toggleIsLoading(false);
        }
    }


    console.log(singleRecipe)

    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamIcon}/>
            </Header>

            <Main>
                {isLoading ? <p>Loading...</p> : null}
                {error ? <p>Er is iets misgegaan: {error}</p> : null}
                {
                    singleRecipe.recipeId > 0 &&

                    <>
                        <RecipePageHeader
                            recipeName={singleRecipe.recipeName}
                            prepTime={singleRecipe.prepTime}
                            creator={singleRecipe.createdByUser}
                            tags={singleRecipe.tags}
                            imageFile={singleRecipe.imageFile}
                        />

                        <RecipePageMidSection recipe={singleRecipe}/>
                    </>
                }

            </Main>

            <Footer/>

        </OuterContainer>
    );
};

export default RecipePage;