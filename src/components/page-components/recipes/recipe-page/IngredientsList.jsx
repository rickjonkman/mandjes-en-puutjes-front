import React, {useEffect, useState} from 'react';
import IngredientListItem from "./IngredientListItem.jsx";

const IngredientsList = ({children, ingredients, servingsInput}) => {

        const [scaledIngredients, setScaledIngredients] = useState([]);

        useEffect(() => {
                const newScaledIngredients = ingredients.map(ingredient => ({
                    ...ingredient,
                    scaledAmount: calculateServings(servingsInput, ingredient.amount)
                }))
                setScaledIngredients(newScaledIngredients);
            }, [servingsInput]
        );

        const calculateServings = (servingsInput, ingredientAmount) => {
            const oneServe = servingsInput / servingsInput;
            return oneServe * ingredientAmount;
        }

        return (
            <section className="ingredients-list__container">

                {children}

                <ul>
                    {
                        scaledIngredients.map((scaledIngredient, index) => {
                            return (
                                <IngredientListItem
                                    key={index}
                                    ingredientAmount={scaledIngredient.scaledAmount}
                                    ingredientUnit={scaledIngredient.unit}
                                    ingredientName={scaledIngredient.name}
                                />
                            )
                        })
                    }
                </ul>
            </section>
        );
    }
;

export default IngredientsList;