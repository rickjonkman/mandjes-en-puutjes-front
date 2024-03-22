

const UserPreferencesForm = () => {



    return (
        <div className="register-user__form--preferences">

            <label htmlFor="register__pref--meat">
                <span>Vlees</span>
                <input
                    type="checkbox"
                    name="preferences"
                    value="meat"
                    id="register--pref-meat"
                />
            </label>

            <label htmlFor="register__pref--fish">
                <span>Vis</span>
                <input
                    type="checkbox"
                    name="preferences"
                    value="fish"
                    id="register__pref--fish"
                />
            </label>

            <label htmlFor="register__pref--vega">
                <span>Vegetarisch</span>
                <input
                    type="checkbox"
                    name="preferences"
                    value="vega"
                    id="register__pref--vega"
                />
            </label>

            <label htmlFor="register__pref--vegan">
                <span>Vegan</span>
                <input
                    type="checkbox"
                    name="preferences"
                    value="vegan"
                    id="register__pref--vegan"
                />
            </label>

        </div>
    );
};

export default UserPreferencesForm;