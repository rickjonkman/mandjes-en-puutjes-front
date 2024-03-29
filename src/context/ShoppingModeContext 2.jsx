import {createContext, useEffect, useState} from "react";
import {getCurrentDate} from "../helpers/getCurrentDate.js";
import {getUsername} from "../helpers/getUsername.js";



export const ShoppingModeContext = createContext({ });

const ShoppingModeContextProvider = ({ children }) => {

    const listFromLocalStorage = localStorage.getItem("currentList");
    const parsedList = JSON.parse(listFromLocalStorage);

    const addValueToList = (parsedList) => {
        if (parsedList.length > 0) {
            return parsedList;
        } else {
            return [{
                id: 0,
                name: "Voeg een product toe",
                inStorage: false,
                notFound: false,

            }]
        }
    }

    const [currentList, setCurrentList] = useState(addValueToList(parsedList));

    const [productItem, setProductItem] = useState({
        id: 0,
        name: "",
        inStorage: false,
        notFound: false,
        selected: false,
    })

    const [listTransferObject] = useState({
        creationDate: getCurrentDate(),
        products: currentList,
        username: getUsername(),
    });



    useEffect(() => {
        localStorage.setItem("currentList", JSON.stringify(currentList));
    }, [currentList]);




    const handleAddProduct = (product) => {
        setCurrentList([...currentList, product]);
    }


    const groceriesObject = {
        currentList,
        setCurrentList,
        productItem,
        setProductItem,
        listTransferObject,
        handleAddProduct,
    }

    return (
        <ShoppingModeContext.Provider value={groceriesObject}>
            {children}
        </ShoppingModeContext.Provider>
    )
}

export default ShoppingModeContextProvider;