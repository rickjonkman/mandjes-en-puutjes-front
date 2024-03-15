import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../../assets/icons/add-icon.svg";
import MinusIcon from "../../../../assets/icons/minus-icon.svg";

const FormInstructions = ({
                              register,
                              instructionFields,
                              onAddInstruction,
                              onRemoveInstruction
                          }) => {


    return (
        <div className="new-recipe__instructions-section">

            <div className="new-recipe__instructions-section--instructions">
                <h2>Instructies</h2>
                <p>Schrijf duidelijk op welke stappen er nodig zijn.</p>

                {
                    instructionFields.map((field, index) => (
                        <section key={field.id} className="instruction-field--section">

                            <label htmlFor="recipe__instruction--step">
                                <input
                                    type="number"
                                    id="recipe__instruction--step"
                                    {...register(`recipeInstructions.${index}.instructionStep`, {valueAsNumber: true})}
                                />
                            </label>

                            <label htmlFor="recipe__instruction--text">
                                <input
                                    type="text"
                                    id="recipe__instruction--text"
                                    {...register(`recipeInstructions.${index}.instructionText`)}
                                />
                            </label>

                            <IconButton
                                iconSrc={MinusIcon}
                                buttonClickHandler={() => onRemoveInstruction(index)}
                            />

                            <IconButton
                                iconSrc={AddIcon}
                                buttonClickHandler={onAddInstruction}
                            />

                        </section>
                    ))
                }

            </div>

        </div>
    );
};

export default FormInstructions;