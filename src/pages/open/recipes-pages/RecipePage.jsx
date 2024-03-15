import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-green.svg";
import Main from "../../../components/structure/Main.jsx";
import RecipePageHeader from "../../../components/page-components/recipes/recipe-page/RecipePageHeader.jsx";
import {recipeModelOld} from "../../../models/recipeModelOld.js";
import axios from "axios";
import {_imageEncode} from "../../../utilities/imageEncoder.js";
import RecipePageMidSection from "../../../components/page-components/recipes/recipe-page/RecipePageMidSection.jsx";
import "../../../scss/scss-pages/recipe-page.scss";
import useFetchImage from "../../../hooks/useFetchImage.js";
import Footer from "../../../components/structure/Footer.jsx";


const RecipePage = () => {

    const {recipeId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loadedRecipe, setLoadedRecipe] = useState(recipeModelOld || {});

    useEffect(() => {
        void fetchRecipe(recipeId);
    }, [recipeId]);

    const fetchRecipe = async (recipeId) => {

        const url = `http://localhost:8080/api/v1/recipes/get-recipe/${recipeId}`;
        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(url);
            setLoadedRecipe(response.data);
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
                <NavBarMain hamburgerIcon={HamIcon}/>
            </Header>

            <Main>
                {isLoading ? <p>Loading...</p> : null}

                {error ? <p>Er is iets misgegaan: {error}</p> : null}

                <RecipePageHeader recipe={loadedRecipe} />

                <RecipePageMidSection recipe={loadedRecipe}/>

            </Main>

            <Footer />

        </OuterContainer>
    );
};

export default RecipePage;