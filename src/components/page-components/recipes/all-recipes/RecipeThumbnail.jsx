


const RecipeThumbnail = ({ recipeName, tags, recipeImage, recipeImageDescription, buttonClickHandler }) => {


    return (
        <article className="recipe-thumbnail__article">

            <div className="recipe-thumbnail__title-container">
                <h2>{recipeName}</h2>
            </div>

            <div className="recipe-thumbnail__tags-container">
                {
                    tags.map((tag, index) => {
                        return (
                            <p key={index}>{tag.tagName}</p>
                        )
                    })
                }
            </div>

            <div className="recipe-thumbnail__image-container">
                <img src={image} alt={recipeImageDescription} />
            </div>

            <button type="button" onClick={buttonClickHandler} className="recipe-thumbnail__button">
                <h3>Ga naar recept</h3>
            </button>

        </article>
    );
};

export default RecipeThumbnail;