import React, {useContext} from 'react';

import {RecipeContext} from "../../../../context/RecipeContext.jsx";
import {useNavigate} from "react-router-dom";
import RecipeThumbnail from "./RecipeThumbnail.jsx";

const RecipeThumbnailsContainer = () => {

    const navigate = useNavigate();
    const { allRecipes } = useContext(RecipeContext);

    return (
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
    );
};

export default RecipeThumbnailsContainer;