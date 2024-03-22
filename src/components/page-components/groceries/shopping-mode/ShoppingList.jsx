import {useContext, useState} from 'react';
import {ShoppingModeContext} from "../../../../context/ShoppingModeContext.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import {UserContext} from "../../../../context/UserContext.jsx";
import axios from "axios";
import {getCurrentDate} from "../../../../helpers/getCurrentDate.js";
import {getUsername} from "../../../../helpers/getUsername.js";

const ShoppingList = () => {

    const {currentList} = useContext(ShoppingModeContext);

    const [shoppingListTransferObject, setShoppingListTransferObject] = useState({
        creationDate: getCurrentDate(),
        username: getUsername(),
        products: currentList,
    });

    const createTransferObject = (e, username) => {
        e.preventDefault();

        if (!username || currentList.length === 0) {
            console.error("Geen producten toegevoegd of geen gebruikersnaam");
            return;
        }

        setShoppingListTransferObject({
            ...shoppingListTransferObject,
            products: currentList,
        });

        handleSendList(username);

    }

    console.log(shoppingListTransferObject)

    const handleSendList = async (username) => {

        try {
            const response = await axios.
            post(`http://localhost:8080/api/v1/shopping-lists/add-new?username=${username}`,
                shoppingListTransferObject,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <section className="groceries-shopping-mode__content">

            <form className="shopping-mode__content--form" onSubmit={(e) => createTransferObject(e)}>

                <ul>
                    {
                        currentList.length > 0 ?
                            currentList.map((product) => (
                                <li key={product.id}>

                                    <div className="shopping-mode__content--checkbox">

                                        <input
                                            type="checkbox"
                                            id={product.id}
                                            name={product.name}
                                            value={product.name}
                                        />
                                        <label htmlFor={product.id}>{product.name}</label>

                                    </div>

                                    <div className="shopping-mode__content--buttons">

                                    </div>

                                </li>
                            )) : <p>Geen producten toegevoegd</p>
                    }
                </ul>

                <SubmitButton
                    buttonClass="form__add-item--submit-button"
                    buttonText="Verstuur lijst"
                />

            </form>
        </section>
    );
};

export default ShoppingList;