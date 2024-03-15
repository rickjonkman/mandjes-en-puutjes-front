
const SaveRecipe = ({ userSaveAmount }) => {



    return (
        <aside className="recipe-page__save-section">

            <div className="save-section__text">
                <p>Dit recept is door <span>{userSaveAmount}</span> personen opgeslagen</p>
            </div>

            <div className="save-section__button-section">
                <button className="save-section__button--save">Sla recept op</button>
            </div>

        </aside>
    );
};

export default SaveRecipe;