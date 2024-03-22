
import RecipeIngredients from "./RecipeIngredients.jsx";
import SaveRecipe from "./SaveRecipe.jsx";
import RecipeInstructions from "./RecipeInstructions.jsx";

const RecipePageMidSection = ({ recipe }) => {

    const { servings, ingredients, instructions, savedByUsers } = recipe;

    return (
        <>
            <div className="recipe-page__mid-section">

                <div className="recipe-page__left-narrow">

                    <RecipeIngredients
                        sectionTitle="Ingredienten"
                        servings={servings}
                        ingredients={ingredients}
                    />

                </div>

                <div className="recipe-page__right-wide">

                    <SaveRecipe userSaveAmount={savedByUsers} />

                    <RecipeInstructions
                        sectionTitle="Instructies"
                        recipeInstructions={instructions}
                    />

                </div>

            </div>
        </>
    );
};

export default RecipePageMidSection;