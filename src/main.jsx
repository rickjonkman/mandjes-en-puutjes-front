import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import ThemeColorContextProvider from "./context/ThemeColorContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthContextProvider>
            <UserContextProvider>
                <Router>
                    <ThemeColorContextProvider>
                        <App/>
                    </ThemeColorContextProvider>
                </Router>
            </UserContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
)
