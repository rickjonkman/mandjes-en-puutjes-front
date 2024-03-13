import ShoppingListItem from "./ShoppingListItem.jsx";
import IconButton from "../buttons/IconButton.jsx";
import NotFoundIcon from "../../assets/icons/not-found-icon.svg";
import Checked from "../../assets/icons/check-icon.svg";
import Form from "../forms/Form.jsx";
import {useContext} from "react";
import {GroceriesContext} from "../../context/GroceriesContext.jsx";

const ShoppingList = ({ shoppingListTitle }) => {

    const { handleSubmitList, currentGroceries, handleMarkAsNotFound, handleMarkAsChecked } = useContext(GroceriesContext);

    return (
        <div className="shopping-list__container-class">

            <h2>{shoppingListTitle}</h2>

            <Form formClass="shopping-list__form" formSubmitHandler={handleSubmitList}>

                <ul>
                    {
                        currentGroceries.map((grocery, index) => {
                            return (
                                <ShoppingListItem
                                    key={index}
                                    groceryId="list-item--grocery"
                                    groceryName={grocery.name}
                                    groceryChecked={grocery.checked}>

                                    <IconButton
                                        buttonId="list-item--set-not-found"
                                        buttonClickHandler={handleMarkAsNotFound}
                                        iconSrc={NotFoundIcon}
                                        iconDescription="Product niet gevonden"
                                    />

                                    <IconButton
                                        buttonId="list-item--set-to-stock"
                                        buttonClickHandler={handleMarkAsChecked}
                                        iconSrc={Checked}
                                        iconDescription="Vink product af"
                                    />

                                </ShoppingListItem>
                            )
                        })
                    }
                </ul>

            </Form>

        </div>
    );
};

export default ShoppingList;