import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../../assets/icons/add-icon.svg";
import MinusIcon from "../../../../assets/icons/minus-icon.svg";

const FormTags = ({
                      register,
                      tagFields,
                      supplyFields,
                      onAddTag,
                      onRemoveTag,
                      onRemoveSupply,
                      onAddSupply,
                  }) => {


    return (
        <div className="new-recipe__tags-section">

            <div className="new-recipe__tags-section--tags">
                <div className="tags-section--title">
                    <h2>Tags</h2>
                    <p>Drie treffende kenmerken van het recept.</p>
                </div>

                {
                    tagFields.map((field, index) => (
                        <section key={field.id} className="tag-field--section">
                            <label htmlFor="recipe-tag"> <span>Tags</span>
                                <input
                                    id="recipe-tag"
                                    {...register(`tags.${index}.tagName`)}
                                />
                            </label>

                            <div className="tag-field--section--buttons">
                                <IconButton
                                    iconSrc={MinusIcon}
                                    buttonClickHandler={() => onRemoveTag(index)}
                                />

                                <IconButton
                                    iconSrc={AddIcon}
                                    buttonClickHandler={onAddTag}
                                />
                            </div>
                        </section>
                    ))
                }

            </div>

            <div className="new-recipe__tags-section--supplies">
                <h2>Benodigdheden</h2>
                <p>Welke materialen heb je nodig.</p>

                {
                    supplyFields.map((field, index) => (
                        <section key={field.id} className="supplies-field--section">
                            <label key={field.id} htmlFor="recipe-supply"> <span>Benodigdheden</span>
                                <input
                                    id="recipe-supply"
                                    {...register(`supplies.${index}.name`)}
                                />
                            </label>

                            <IconButton
                                iconSrc={MinusIcon}
                                buttonClickHandler={() => onRemoveSupply(index)}
                            />

                            <IconButton
                                iconSrc={AddIcon}
                                buttonClickHandler={() => onAddSupply({tagName: ''})}
                            />
                        </section>
                    ))
                }

            </div>

        </div>
    );
};

export default FormTags;