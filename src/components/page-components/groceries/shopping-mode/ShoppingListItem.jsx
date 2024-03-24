
import ShoppingListButtonGroup from "./ShoppingListButtonGroup.jsx";
import {useContext} from "react";
import {ShoppingModeContext} from "../../../../context/ShoppingModeContext.jsx";

const ShoppingListItem = ({ product }) => {

    const { currentList } = useContext(ShoppingModeContext);

    const handleProductNotFound = (productId) => {
        currentList.map((product) => {
            if (product.id === productId) {
                product.notFound = true;
            }
        })
    }

    const handleAddProductToStock = (productId) => {
        currentList.map((product) => {
            if (product.id === productId) {
                product.inStorage = true;
            }
        })
    }

    const handleSelectProduct = (productId) => {
        currentList.map((product) => {
            if (product.id === productId) {
                product.selected = true;
            }
        })
    }

    return (
        <li>
            <div className="shopping-mode__content--checkbox">

                <input
                    type="checkbox"
                    id={product.id}
                    name={product.name}
                    value={product.name}
                    checked={product.selected}
                    onChange={() => handleSelectProduct(product.id)}
                />

                <div className="shopping-mode__label-container">
                    <label htmlFor={product.id}>{product.name}</label>
                </div>

            </div>

            <ShoppingListButtonGroup
                notFoundClickHandler={() => handleProductNotFound(product.id)}
                checkedClickHandler={() => handleAddProductToStock(product.id)}
            />

        </li>
    );
};

export default ShoppingListItem;