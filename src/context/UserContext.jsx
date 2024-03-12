import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";


export const UserContext = createContext({});

const UserContextProvider = ({children}) => {



    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            const username = decodedToken.sub;
            void fetchUserData(username, token);
        } else {
            setIsAuth({
                isAuth: false,
                user: null,
                status: 'completed',
            });
        }
    }, []);

    const login = (jwt) => {
        localStorage.setItem('token', jwt);
        void fetchUserData();
    }

    const logOut = () => {
        localStorage.clear();
        setIsAuth({
            isAuth: false,
            user: null,
            status: 'completed',
        });
    }

    async function fetchUserData(username, jwt) {

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/get?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                })
            console.log(response)
            setIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    firstname: response.data.firstname,
                    enabled: response.data.enabled,
                },
                status: 'completed',
            })



        } catch (e) {
            console.error(e);
        }
    }

    const userObject = {
        isAuth,
        setIsAuth,
        login,
        logOut,
    }

    return (
        <UserContext.Provider value={userObject}>
            {isAuth.status === 'completed' ? children : <p>Loading...</p>}
        </UserContext.Provider>
    );
}

export default UserContextProvider;