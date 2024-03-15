import React from 'react';


const FormBasicInfo = ({register, errors}) => {


    return (
        <div className="new-recipe__basic-info">
            <h2>Algemene informatie</h2>

            <label htmlFor="new-recipe__name"><span>Naam van het recept:</span>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    id="new-recipe__name"
                    {...(register("recipeName",
                        {
                            required: 'Naam is verplicht',
                            minLength: 3
                        }))}
                />
                {errors.recipeName && <p>{errors.recipeName.message}</p>}
            </label>

            <div className="new-recipe__basic-info--prep-time">
                <h3>Bereidingstijd</h3>

                <div className="prep-time__input-fields">
                    <label htmlFor="prep-time__hour">
                        <span>Uur</span>
                        <input
                            type="number"
                            placeholder="00"
                            id="prep-time__hour"
                            {...(register("hour",
                                {
                                    required: true,
                                    min: 1,
                                    max: 12,
                                }))}
                        />
                        {errors.hour && <p>{errors.hour.message}</p>}
                    </label>

                    <label htmlFor="prep-time__min">
                        <span>Min</span>
                        <input
                            type="number"
                            placeholder="00"
                            id="prep-time__min"
                            {...(register("min",
                                {
                                    required: true,
                                    min: 1,
                                    max: 59,
                                }))}
                        />
                        {errors.min && <p>{errors.min.message}</p>}
                    </label>
                </div>

            </div>

            <div className="new-recipe__basic-info--servings">
                <label htmlFor="new-recipe__servings"><span>Porties:</span>
                    <input
                        type="number"
                        placeholder="Servings"
                        id="new-recipe__servings"
                        {...(register("servings", {
                            required: true,
                            min: 1,
                            max: 12
                        }))}
                    />
                    {errors.servings && <p>{errors.servings.message}</p>}
                </label>
            </div>

        </div>
    )
        ;
};

export default FormBasicInfo;