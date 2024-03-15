import React from 'react';
import IconButton from "../../../ui/buttons/IconButton.jsx";
import RemoveIcon from "/src/assets/icons/not-found-icon.svg";

const ListItemButtons = ({ handleRemoveGrocery }) => {



    return (
        <div className="list-item__container--buttons">

            <IconButton
                buttonId="list-item--set-to-stock"
                buttonClickHandler={handleRemoveGrocery}
                iconSrc={RemoveIcon}
                iconDescription="Vink product af"
            />

        </div>
    );
};

export default ListItemButtons;