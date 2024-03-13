import {createContext, useEffect, useState} from "react";


export const GroceriesContext = createContext({ });

const GroceriesContextProvider = ({ children }) => {

    const groceriesFromLocalStorage = JSON.parse(localStorage.getItem('currentGroceries'));
    const [currentGroceries, setCurrentGroceries] = useState(groceriesFromLocalStorage || []);


    useEffect(() => {
        localStorage.setItem('currentGroceries', JSON.stringify(currentGroceries));
    }, [currentGroceries]);

    const handleAddProduct = (productName, ) => {
        const newProduct = {
            id: new Date().getTime(),
            name: productName,
            checked: false,
            notFound: false,
        }
        setCurrentGroceries([...currentGroceries, newProduct]);
    }

    const handleRemoveProduct = (id) => {
        const newList = currentGroceries.filter((grocery) => grocery.id !== id);
        setCurrentGroceries(newList);
    }

    const handleClearList = () => {
        setCurrentGroceries([]);
    }

    const handleSetProductToStock = (id) => {
        const newList = currentGroceries.map((grocery) => {
            if (grocery.id === id) {
                grocery.checked = !grocery.checked;
            }
            return grocery;
        });
        setCurrentGroceries(newList);
    }

    const handleMarkAsNotFound = (id) => {
        const newList = currentGroceries.map((grocery) => {
            if (grocery.id === id) {
                grocery.notFound = !grocery.notFound;
            }
            return grocery;
        });
        setCurrentGroceries(newList);
    }

    const handleSubmitList = () => {
        console.log('submitting list');
    }


    const groceriesObject = {
        currentGroceries,
        setCurrentGroceries,
        handleAddProduct,
        handleRemoveProduct,
        handleClearList,
        handleSetProductToStock,
        handleMarkAsNotFound,
        handleSubmitList,
    }

    return (
        <GroceriesContext.Provider value={groceriesObject}>
            {children}
        </GroceriesContext.Provider>
    )
}

export default GroceriesContextProvider;