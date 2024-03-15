import React from 'react';
import IconButton from "../../../ui/buttons/IconButton.jsx";
import MinusIcon from "../../../../assets/icons/minus-icon.svg";
import PlusIcon from "../../../../assets/icons/add-icon.svg";

const ServingsCalculator = ({ servings }) => {



    return (
        <section className="servings-calculator__container">

            <p>{servings}</p>
            <p>Personen</p>

            <div className="servings-calculator__buttons">
                <IconButton iconSrc={MinusIcon} buttonId="calculator-button"/>
                <IconButton iconSrc={PlusIcon} buttonId="calculator-button"/>
            </div>

        </section>
    );
};

export default ServingsCalculator;