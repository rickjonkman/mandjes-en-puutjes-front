import React, {useContext} from 'react';
import ShoppingListItem from "./ShoppingListItem.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";

const ShoppingListForm = ({ currentGroceries, handleSubmitList }) => {



    return (
        <form className="shopping-list__form" onSubmit={handleSubmitList}>

            <ul>
                {
                    currentGroceries.map((grocery, index) => {
                        return (
                            <ShoppingListItem
                                key={index}
                                grocery={grocery}>


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