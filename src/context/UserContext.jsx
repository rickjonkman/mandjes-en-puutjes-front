import {createContext, useState} from "react";


export const UserContext = createContext({ });

const UserContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });


    const userObject = {
        isAuth,
        setIsAuth,
    }

    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;