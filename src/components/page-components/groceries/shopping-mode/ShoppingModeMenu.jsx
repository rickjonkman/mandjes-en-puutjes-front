import React, {useContext} from 'react';
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import {ShoppingModeContext} from "../../../../context/ShoppingModeContext.jsx";

const ShoppingModeMenu = () => {

    const { currentList, handleAddProduct, productItem, setProductItem } = useContext(ShoppingModeContext);
    console.log(currentList)

    return (
        <aside className="groceries-shopping-mode__menu">

            <div className="form__add-item--container">
                <form className="shopping-mode__form--add-item" onSubmit={() => handleAddProduct(productItem)}>
                    <label htmlFor="form__add-item--text-input">Voeg product toe</label>
                    <input
                        type="text"
                        id="form__add-item--text-input"
                        name="search"
                        placeholder="Type product..."
                        value={productItem.name}
                        onChange={(e) => setProductItem({ ...productItem, name: e.target.value })}
                    />

                    <SubmitButton
                        buttonClass="form__add-item--submit-button"
                        buttonText="Voeg toe"
                    />
                </form>
            </div>

        </aside>
    );
};

export default ShoppingModeMenu;