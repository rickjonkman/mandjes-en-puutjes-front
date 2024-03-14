
import RecipeTopInfo from "./RecipeTopInfo.jsx";
import RecipeTitle from "../page-title/RecipeTitle.jsx";
import RecipeImage from "./RecipeImage.jsx";
import {useEffect, useState} from "react";
import useFetchImage from "../../../hooks/useFetchImage.js";

const RecipePageHeader = ({ recipe }) => {

    const { recipeName, createdByUser, prepTime, imageFile, tagDTOList } = recipe;

    const [recipeImage, setRecipeImage] = useState({});
    const url = `http://localhost:8080/api/v1/recipes/open/download-image/${imageFile}`;

    const { fetchImage } = useFetchImage(url, setRecipeImage);

    useEffect(() => {
        void fetchImage();

        return console.log('Image fetched');
    }, [recipe])



    return (
        <>
            <RecipeTitle recipeTitle={recipeName} creator={createdByUser} />

            <div className="recipe-page__top-section">

                <RecipeTopInfo
                    recipeName={recipeName}
                    prepTime={prepTime}
                    creator={createdByUser}
                    tags={tagDTOList}
                />

                <RecipeImage
                    imgSrc={recipeImage}
                    imgDescription="Een foto van het recept"
                    imgId="recipe-page__top-image"
                />

            </div>
        </>

    );
};

export default RecipePageHeader;