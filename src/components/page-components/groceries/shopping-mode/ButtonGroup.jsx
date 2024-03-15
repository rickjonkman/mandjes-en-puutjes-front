import React, {useContext} from 'react';
import DefaultButton from "../../../ui/buttons/DefaultButton.jsx";
import {GroceriesContext} from "../../../../context/GroceriesContext.jsx";

const ButtonGroup = () => {

    const { handleClearList } = useContext(GroceriesContext);

    return (
        <section className="groceries-shopping-mode__button-group">

            <DefaultButton
                buttonClass="groceries-shopping-mode__button"
                buttonText="Verwijder geselecteerde producten"
                buttonClickHandler={handleClearList}
            />

        </section>
    );
};

export default ButtonGroup;