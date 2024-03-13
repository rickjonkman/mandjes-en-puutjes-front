import {createContext, useEffect, useState} from "react";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import axios from "axios";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({ });

const AuthContextProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenExpired(token)) {
            const username = extractUsernameFromToken(token);
            void login(token, username);
        } else {
            logOut();
        }
    }, []);

    const authenticate = async (username, password) => {

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/authenticate', {
                username: username,
                password: password
            })
            localStorage.setItem('token', response.data.jwt);

        } catch (e) {
            console.error(e);
        }

    }

    const login = async (token, username) => {

        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/get?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            setAuthenticated({
                isAuth: true,
                user: response.data,
                status: 'completed',
            });
            localStorage.setItem('token', `${token}`);
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    const logOut = () => {
        localStorage.removeItem('token');
        setAuthenticated({
            isAuth: false,
            user: null,
            status: 'pending',
        });
    }

    console.log(authenticated);


    const authObject = {
        authenticated: authenticated.isAuth,
        setAuthenticated,
        authenticate,
        login,
        logOut,
        error,
        isLoading,
    }

    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;