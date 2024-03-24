import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {getUsername} from "../helpers/getUsername.js";

export const GroceriesContext = createContext({});

const GroceriesContextProvider = ({ children }) => {





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
