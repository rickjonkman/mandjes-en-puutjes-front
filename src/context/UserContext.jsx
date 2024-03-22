import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {isTokenExpired} from "../helpers/isTokenExpired.js";


export const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const token = localStorage.getItem('token');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userDetails, setUserDetails] = useState({
        username: '',
        firstname: '',
        preferences: {
            showMeat: false,
            showFish: false,
            showVega: false,
            showVegan: false,

        },
        createdRecipes: [],
        savedRecipes: [],
    });

    const [preferencesNeedUpdate, setPreferencesNeedUpdate] = useState(false);

    useEffect(() => {

        if (token && !isTokenExpired(token)) {
            console.log('Token is expired');
            setUserDetails({
                username: '',
                firstname: '',
                preferences: null,
                createdRecipes: [],
                savedRecipes: [],
            })
        } else if (token && isTokenExpired(token)) {
            const username = jwtDecode(token).sub;
            void fetchUser(username);
        }

    }, []);

    useEffect(() => {
        if (preferencesNeedUpdate) {
            void handleUpdatePreferences(userDetails.preferences);
            setPreferencesNeedUpdate(false);
        }
    }, [preferencesNeedUpdate, userDetails.preferences]);



    const fetchUser = async (username) => {

        setError(null);
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
            localStorage.setItem('preferences', response.data.userPreferencesDTO);
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    const handleUpdatePreferences = async (preferences) => {

            setError(null);
            setIsLoading(true);

            try {
                const response = await axios.put(`http://localhost:8080/api/v1/user/update-preferences?username=${userDetails.username}`,
                    {
                        preferences: preferences
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                );
                setUserDetails({
                    ...userDetails,
                    preferences: response.data
                })
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                setIsLoading(false);
            }
    }

    const userObject = {
        userDetails,
        setUserDetails,
        preferences: userDetails.preferences,
        error,
        isLoading,
        handleUpdatePreferences,
        preferencesNeedUpdate,
    }

    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;