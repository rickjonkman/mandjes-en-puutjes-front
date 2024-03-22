import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const ThemeColorContext = createContext({});

const ThemeColorContextProvider = ({children}) => {

    const [currentPath, setCurrentPath] = useState(useLocation().pathname);
    const [color, setColor] = useState('');

    useEffect(() => {
        setColorTheme(currentPath);
    }, [currentPath]);



    function setColorTheme(pathname) {

        let colorString = '';

        switch (pathname) {
            case '/':
            case '/general/dashboard':
            case '/general/login':
            case '/general/register':
            case '/general/logout':
            case '/general/preferences':
                colorString = 'pink';
                break;
            case '/groceries/main':
            case '/groceries/shopping-mode':
            case '/groceries/current-list':
            case '/groceries/recent-lists':
                colorString = 'blue';
                break;
            case '/recipes/*':
            case '/recipes/main':
            case '/recipes/all':
            case '/recipes/saved':
            case '/recipes/add':
                colorString = 'green';
                break;
        }

        setColor(colorString);
    }



    return (
        <ThemeColorContext.Provider value={{color, setCurrentPath}}>
            {children}
        </ThemeColorContext.Provider>
    )
}

export default ThemeColorContextProvider;