import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const RecipeContext = createContext({});

const RecipeContextProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        void fetchAllRecipes();
    }, []);


    const fetchAllRecipes = async () => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get("http://localhost:8080/api/v1/recipes/get-all");
            console.log(response);
            setAllRecipes(response.data);
        } catch (e) {
            console.error("Error fetching all recipes: ", e);
            setError(e);
        } finally {
            setIsLoading(false);
        }

    }




    const recipeContextData = {
        allRecipes,
        setAllRecipes,
        error,
        isLoading,
    }

    console.log(allRecipes)

    return (
        <RecipeContext.Provider value={recipeContextData}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;