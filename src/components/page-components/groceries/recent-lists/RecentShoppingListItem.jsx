import React, {useContext} from 'react';
import IconButton from "../../../ui/buttons/IconButton.jsx";
import {GroceriesContext} from "../../../../context/GroceriesContext.jsx";
import AddIcon from "/src/assets/icons/add-icon.svg";

const RecentShoppingListItem = ({ grocery }) => {

    const { handleAddProduct } = useContext(GroceriesContext);



    return (
        <li>
            <div className="recent-list-item__container">
                <p>{grocery}</p>
            </div>

            <IconButton
                buttonId="recent-list-item__add-to-new-list"
                iconSrc={AddIcon}
                iconDescription="Voeg toe aan nieuwe lijst"
                buttonClickHandler={() => handleAddProduct(grocery.groceryName)}
            />
        </li>
    );
};

export default RecentShoppingListItem;