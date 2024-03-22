import ShoppingListItem from "./ShoppingListItem.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import {useContext} from "react";
import {GroceriesContext} from "../../../../context/GroceriesContext.jsx";

const ShoppingListForm = ({handleSubmitList}) => {

    const { currentGroceries } = useContext(GroceriesContext);

    return (
        <form className="shopping-list__form" onSubmit={handleSubmitList}>

            <ul>
                {
                    currentGroceries.map((grocery, index) => {
                        return (
                            <ShoppingListItem
                                key={index}
                                groceryItem={grocery}>


                            </ShoppingListItem>
                        )
                    })
                }
            </ul>

            <SubmitButton
                buttonClass="shopping-list__submit-button"
                buttonText="Opslaan en nieuwe lijst aanmaken"
                buttonType="submit"
            />

        </form>
    );
};

export default ShoppingListForm;