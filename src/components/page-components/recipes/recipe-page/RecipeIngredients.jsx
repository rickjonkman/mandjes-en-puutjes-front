import React, {useState} from 'react';
import IngredientsList from "./IngredientsList.jsx";
import ServingsCalculator from "./ServingsCalculator.jsx";

const RecipeIngredients = ({ servings, ingredients, sectionTitle }) => {

    const [servingsAmount, setServingsAmount] = useState(servings);

    return (
        <aside className="recipe__ingredients-section--class">

            <h3>{sectionTitle}</h3>

            <ServingsCalculator
                servings={servingsAmount}
                minusClickHandler={() => setServingsAmount(servingsAmount - 1)}
                plusClickHandler={() => setServingsAmount(servingsAmount + 1)}
            />

            <IngredientsList
                ingredients={ingredients}
                servingsInput={servingsAmount}
            />

        </aside>
    );
};

export default RecipeIngredients;