import {useContext} from "react";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";


const ShoppingListItem = ({ grocery }) => {

    const { handleToggleGrocery } = useContext(GroceriesContext);

    return (
        <li className="list-item__class">
            <div className="list-item__container">

                <div className="list-item__container--checkbox">

                    <label htmlFor="grocery--id">

                        <input
                            type="checkbox"
                            id="grocery--id"
                            checked={grocery.inStock}
                            onChange={() => handleToggleGrocery(grocery.id)}
                        />

                        {grocery.name}

                    </label>

                </div>

            </div>
        </li>
    );
};

export default ShoppingListItem;