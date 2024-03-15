
import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../../assets/icons/add-icon.svg";
import MinusIcon from "../../../../assets/icons/minus-icon.svg";

const FormIngredients = ({
                             register,
                             ingredientFields,
                             onAddIngredient,
                             onRemoveIngredient
                         }) => {


    return (
        <div className="new-recipe__ingredients-section">

            <div className="new-recipe__ingredients-section--ingredients">
                <h2>Ingredienten</h2>
                <p>Bijvoorbeeld: <em>500 gram sperziebonen</em></p>

                {
                    ingredientFields.map((ingredientField, index) => (
                        <section key={ingredientField.id} className="ingredient-field--section">

                            <label htmlFor="recipe__ingredient--amount"> <span>Aantal</span>
                                <input
                                    type="number"
                                    id="recipe__ingredient--amount"
                                    {...register(`recipeIngredients.${index}.amount`, {valueAsNumber: true})}
                                />
                            </label>

                            <label htmlFor="recipe__ingredient--unit"><span>Eenheden</span>
                                <input
                                    type="text"
                                    id="recipe__ingredient--unit"
                                    {...register(`recipeIngredients.${index}.unit`)}
                                />
                            </label>

                            <label htmlFor="recipe__ingredient--name"><span>Naam</span>
                                <input
                                    type="text"
                                    id="recipe__ingredient--name"
                                    {...register(`recipeIngredients.${index}.ingredientName`)}
                                />
                            </label>

                            <IconButton
                                iconSrc={MinusIcon}
                                buttonClickHandler={() => onRemoveIngredient(index)}
                            />

                            <IconButton
                                iconSrc={AddIcon}
                                buttonClickHandler={onAddIngredient}
                            />

                        </section>
                    ))
                }

            </div>

        </div>
    );
};

export default FormIngredients;