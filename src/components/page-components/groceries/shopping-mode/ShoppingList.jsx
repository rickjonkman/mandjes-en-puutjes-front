
import ShoppingListForm from "./ShoppingListForm.jsx";
import {useContext} from "react";
import {GroceriesContext} from "../../../../context/GroceriesContext.jsx";
import axios from "axios";

const ShoppingList = ({ shoppingListTitle }) => {

    const { currentGroceries } = useContext(GroceriesContext);

    const handleSubmitList = () => {

        try {
            const response = axios.post('http://localhost:8080/groceries', {
                currentGroceries
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="shopping-list__container-class">

            <h2>{shoppingListTitle}</h2>

            <ShoppingListForm currentGroceries={currentGroceries} handleSubmitList={handleSubmitList} />

        </div>
    );
};

export default ShoppingList;