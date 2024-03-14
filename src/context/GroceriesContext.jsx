import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const GroceriesContext = createContext({ });

const GroceriesContextProvider = ({ children }) => {

    const groceriesFromLocalStorage = JSON.parse(localStorage.getItem('currentGroceries'));
    const [currentGroceries, setCurrentGroceries] = useState(groceriesFromLocalStorage || []);
    const [grocery, setGrocery] = useState({
        id: '',
        name: '',
        inStock: false,
    });

    useEffect(() => {
        localStorage.setItem('currentGroceries', JSON.stringify(currentGroceries));

        return console.log('GroceriesContextProvider mounted');
    }, [currentGroceries]);

    const handleAddProduct = (productName, ) => {
        setGrocery({
            id: new Date().getTime(),
            name: productName,
            inStock: false,
        });
        setCurrentGroceries([...currentGroceries, grocery]);
    }

    // const handleRemoveProduct = (id) => {
    //     const newList = currentGroceries.filter((grocery) => grocery.id !== id);
    //     setCurrentGroceries(newList);
    // }

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
        handleAddProduct,
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