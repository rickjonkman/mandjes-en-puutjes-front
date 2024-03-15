import React from 'react';
import IngredientListItem from "./IngredientListItem.jsx";

const IngredientsList = ({ ingredients }) => {



    return (
        <section className="ingredients-list__container">
            <ul>
                {
                    ingredients.map((ingredient, index) => {
                        return (
                            <IngredientListItem
                                key={index}
                                ingredientAmount={ingredient.amount}
                                ingredientUnit={ingredient.unit}
                                ingredientName={ingredient.ingredientName}
                            />
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default IngredientsList;