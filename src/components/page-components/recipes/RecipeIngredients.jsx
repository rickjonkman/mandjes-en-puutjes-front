import React from 'react';
import ServingsCalculator from "./ServingsCalculator.jsx";
import IngredientsList from "./IngredientsList.jsx";

const RecipeIngredients = ({ servings, ingredients, sectionTitle }) => {



    return (
        <aside className="recipe__ingredients-section--class">

            <h3>{sectionTitle}</h3>

            <ServingsCalculator servings={servings} />

            <IngredientsList ingredients={ingredients} />

        </aside>
    );
};

export default RecipeIngredients;