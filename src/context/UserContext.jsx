import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import {jwtDecode} from "jwt-decode";


export const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userDetails, setUserDetails] = useState({
        username: '',
        firstname: '',
        preferences: {
            showMeat: true,
            showFish: true,
            showVegetarian: true,
            showVegan: true,
        },
        createdRecipes: [],
        savedRecipes: [],
    });

    useEffect(() => {

        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        if (token && isTokenExpired(token)) {
            void fetchUser(username);
        }

        void fetchUser(username);
    }, []);

    const fetchUser = async (username) => {

        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/get-user-details?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            ;
            setUserDetails({
                ...userDetails,
                username: response.data.username,
                firstname: response.data.firstname,
                preferences: response.data.userPreferencesDTO,
                createdRecipes: response.data.createdRecipes,
                savedRecipes: response.data.savedRecipes,
            })
            console.log(response)
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    console.log(userDetails);


    const userObject = {
        userDetails,
        error,
        isLoading,
    }

    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;