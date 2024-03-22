import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const GroceriesContext = createContext({ });

const GroceriesContextProvider = ({ children }) => {






    const groceriesObject = {

    }

    return (
        <GroceriesContext.Provider value={groceriesObject}>
            {children}
        </GroceriesContext.Provider>
    )
}

export default GroceriesContextProvider;