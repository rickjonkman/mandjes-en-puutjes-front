import {useState} from "react";


const ShoppingListItem = ({ groceryId, groceryName, groceryChecked, children }) => {

    const [productItem, setProductItem] = useState({
        id: groceryId,
        name: groceryName,
        checked: groceryChecked,
        notFound: false,
    });

    return (
        <li className="list-item__class">
            <div className="list-item__container">

                <div className="list-item__container--checkbox">

                    <label htmlFor={groceryId}>

                        <input
                            type="checkbox"
                            id={groceryId}
                            checked={groceryChecked}
                            onChange={() => setProductItem.checked = !productItem.checked}
                        />

                        {productItem.name}

                    </label>

                </div>

                <div className="list-item__container--buttons">

                    {children}

                </div>
            </div>
        </li>
    );
};

export default ShoppingListItem;