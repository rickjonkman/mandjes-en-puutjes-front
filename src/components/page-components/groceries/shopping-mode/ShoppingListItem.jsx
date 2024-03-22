import {useContext} from "react";
import {GroceriesContext} from "../../../../context/GroceriesContext.jsx";
import IconButton from "../../../ui/buttons/IconButton.jsx";
import NotFoundIcon from "../../../../assets/icons/not-found-icon.svg";
import CheckIcon from "../../../../assets/icons/check-icon.svg";


const ShoppingListItem = ({ groceryItem }) => {

    const { handleToggleGrocery, currentGroceries, setGrocery } = useContext(GroceriesContext);

    const handleGroceryNotFound = (groceryId) => {
        currentGroceries.map((grocery) => {
            if (grocery.id === groceryId) {
                setGrocery({
                    ...grocery,
                    notFound: true,
                })
            }
        })
    }

    const handleGroceryFound = (groceryId) => {
        currentGroceries.map((grocery) => {
            if (grocery.id === groceryId) {
                setGrocery({
                    ...grocery,
                    inStock: true,
                })
            }
        })
    }

    return (
        <li className="list-item__class">
            <div className="list-item__container">

                <div className="list-item__container--checkbox">

                    <label htmlFor="grocery--id">

                        <input
                            type="checkbox"
                            id="grocery--id"
                            checked={groceryItem.inStock}
                            onChange={() => handleToggleGrocery(groceryItem.id)}
                        />

                        {groceryItem.name}

                    </label>

                </div>

                <div className="current-groceries__list-item--button-group">
                    <IconButton
                        iconSrc={NotFoundIcon}
                        iconId="grocery__not-found-icon"
                        buttonId="grocery__not-found-button"
                        iconDescription="Klik als je dit product niet kunt vinden"
                        buttonClickHandler={() => handleGroceryNotFound(groceryItem.id)}
                    />

                    <IconButton
                        iconSrc={CheckIcon}
                        iconId="grocery__check-icon"
                        buttonId="grocery__check-button"
                        iconDescription="Klik als je dit product hebt gevonden"
                        buttonClickHandler={() => handleGroceryFound(groceryItem.id)}
                    />
                </div>

            </div>
        </li>
    );
};

export default ShoppingListItem;