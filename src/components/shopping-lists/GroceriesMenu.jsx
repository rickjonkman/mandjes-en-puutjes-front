import React from 'react';
import AddProductForm from "./AddProductForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";

const GroceriesMenu = () => {



    return (
        <menu className="groceries-shopping-mode__menu">

            <div className="groceries-shopping-mode__menu--left-side">

                <AddProductForm />

            </div>

            <div className="groceries-shopping-mode__menu--right-side">

                <ButtonGroup />

            </div>

        </menu>
    );
};

export default GroceriesMenu;