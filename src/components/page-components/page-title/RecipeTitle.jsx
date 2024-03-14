

const RecipeTitle = ({ recipeTitle, creator }) => {



    return (
        <section className="recipe__title">
            <h1>{recipeTitle}</h1>
            <p>Toegevoegd door: {creator}</p>
        </section>
    );
};

export default RecipeTitle;