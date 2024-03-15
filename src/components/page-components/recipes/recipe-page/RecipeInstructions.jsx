

const RecipeInstructions = ({ recipeInstructions, sectionTitle }) => {



    return (
        <section className="recipe-page__instructions-section">

            <h2>{sectionTitle}</h2>

            <ul>
                {
                    recipeInstructions.map((instruction) => {
                        return (
                            <div key={instruction.step} className="recipe-instructions__instruction">
                                <h1>{instruction.step}</h1>
                                <p>{instruction.instructionText}</p>
                            </div>
                        )
                    })
                }
            </ul>

        </section>
    );
};

export default RecipeInstructions;