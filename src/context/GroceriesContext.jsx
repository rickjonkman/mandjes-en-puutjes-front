import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {getUsername} from "../helpers/getUsername.js";

export const GroceriesContext = createContext({});

const GroceriesContextProvider = ({ children }) => {

<<<<<<< HEAD
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
=======
>>>>>>> shopping-mode-rebuild




    console.log(recentLists)

    const GroceriesObject = {
        recentLists,
        setRecentLists,
        error,
        isLoading,
    }

    return (
        <GroceriesContext.Provider value={GroceriesObject}>
            {children}
        </GroceriesContext.Provider>
    );
}

export default GroceriesContextProvider;
