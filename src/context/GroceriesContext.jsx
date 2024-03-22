import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const GroceriesContext = createContext({ });

const GroceriesContextProvider = ({ children }) => {

    const groceriesFromLocalStorage = localStorage.getItem('currentGroceries');
    const initialItem = [{
        id: 100,
        name: 'Test item',
        inStock: false,
        checked: false,
    }]

    const [currentGroceries, setCurrentGroceries] = useState(JSON.parse(groceriesFromLocalStorage) || initialItem);
    const [grocery, setGrocery] = useState({
        id: 0,
        name: '',
        inStock: false,
        notFound: false,
    });

    useEffect(() => {
        localStorage.setItem('currentGroceries', JSON.stringify(currentGroceries));

        return console.log('GroceriesContextProvider mounted');
    }, [currentGroceries]);

    const handleClearList = () => {
        setCurrentGroceries([]);
    }

    const handleToggleGrocery = (id) => {
        const newList = currentGroceries.map((grocery) => {
            if (grocery.id === id) {
                grocery.checked = !grocery.checked;
            }
            return grocery;
        });
        setCurrentGroceries(newList);
    }




    const groceriesObject = {
        currentGroceries,
        setCurrentGroceries,
        grocery,
        setGrocery,
        handleClearList,
        handleToggleGrocery,
    }

    return (
        <GroceriesContext.Provider value={groceriesObject}>
            {children}
        </GroceriesContext.Provider>
    )
}

export default GroceriesContextProvider;