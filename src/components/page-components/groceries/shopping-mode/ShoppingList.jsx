import {useContext, useState} from 'react';
import {ShoppingModeContext} from "../../../../context/ShoppingModeContext.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import axios from "axios";
import {getUsername} from "../../../../helpers/getUsername.js";
import ShoppingListItem from "./ShoppingListItem.jsx";

const ShoppingList = () => {

    const {currentList, listTransferObject} = useContext(ShoppingModeContext);



    const handleSendList = (e) => {
        e.preventDefault();

        try {
            const response = axios.post(`http://localhost:8080/api/v1/shopping-lists/add-new?username=${getUsername()}`,
                {
                    creationDate: listTransferObject.creationDate,
                    products: listTransferObject.products,
                    username: listTransferObject.username,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")} `
                    }
                });
            console.log(response)
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <section className="groceries-shopping-mode__content">

            <form className="shopping-mode__content--form" onSubmit={(e) => handleSendList(e)}>

                <ul>
                    {
                        currentList.length > 0 ?
                            currentList.map((product) => (

                                <ShoppingListItem
                                    key={product.id}
                                    product={product}
                                />

                            )) : <p>Geen producten toegevoegd</p>
                    }
                </ul>

                <SubmitButton
                    buttonClass="form__add-item--submit-button"
                    buttonText="Verstuur en maak nieuwe lijst aan"
                />

            </form>
        </section>
    );
};

export default ShoppingList;