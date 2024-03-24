import React from 'react';
import IconButton from "../../../ui/buttons/IconButton.jsx";
import NotFoundIcon from "../../../../assets/icons/not-found-icon.svg";
import CheckedIcon from "../../../../assets/icons/check-icon.svg";

const ShoppingListButtonGroup = ({ notFoundClickHandler, checkedClickHandler }) => {



    return (
        <div className="shopping-list__button-group">
            <IconButton
                iconSrc={NotFoundIcon}
                iconId="not-found-icon"
                iconAlt="Klik als je product niet kunt vinden"
                buttonId="not-found-button"
                iconDescription="Klik als je product niet kunt vinden"
                buttonClickHandler={notFoundClickHandler}
            />
            <IconButton
                iconSrc={CheckedIcon}
                iconId="checked-icon"
                iconAlt="Klik als je product hebt gevonden"
                buttonId="checked-button"
                iconDescription="Klik als je product hebt gevonden"
                buttonClickHandler={checkedClickHandler}
            />
        </div>
    );
};

export default ShoppingListButtonGroup;