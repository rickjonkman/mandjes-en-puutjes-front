
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext.jsx";
import DashboardPage from "../../authenticated/user-pages/DashboardPage.jsx";
import RecipesMainPage from "../../authenticated/recipes-pages/RecipesMainPage.jsx";


const LandingPage = () => {

    const { authenticated } = useContext(AuthContext);

    return (
        <>
            {
                authenticated ? <DashboardPage /> : <RecipesMainPage />
            }
        </>
    );
};

export default LandingPage;