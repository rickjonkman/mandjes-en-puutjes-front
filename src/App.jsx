import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/open/general-pages/LandingPage.jsx";
import LoginPage from "./pages/open/general-pages/LoginPage.jsx";
import RegisterPage from "./pages/open/general-pages/RegisterPage.jsx";
import {useContext} from "react";
import DashboardPage from "./pages/authenticated/user-pages/DashboardPage.jsx";
import PleaseRegister from "./pages/util-pages/PleaseRegister.jsx";
import GroceriesMainPage from "./pages/authenticated/groceries-pages/GroceriesMainPage.jsx";
import RecentListsPage from "./pages/authenticated/groceries-pages/RecentListsPage.jsx";
import ShoppingModePage from "./pages/authenticated/groceries-pages/ShoppingModePage.jsx";
import RecipesMainPage from "./pages/authenticated/recipes-pages/RecipesMainPage.jsx";
import AllRecipesPage from "./pages/open/recipes-pages/AllRecipesPage.jsx";
import RecipePage from "./pages/open/recipes-pages/RecipePage.jsx";
import SavedRecipesPage from "./pages/authenticated/recipes-pages/SavedRecipesPage.jsx";
import SurpriseRecipePage from "./pages/authenticated/recipes-pages/SurpriseRecipePage.jsx";
import RecipeNew from "./pages/authenticated/recipes-pages/RecipeNew.jsx";
import {AuthContext} from "./context/AuthContext.jsx";
import LoadingPage from "./pages/util-pages/LoadingPage.jsx";
import LogOutPage from "./pages/authenticated/user-pages/LogOutPage.jsx";
import PreferencesPage from "./pages/authenticated/user-pages/PreferencesPage.jsx";

function App() {

    const {authenticated, isLoading} = useContext(AuthContext);

    return (
        <>
            <Routes>

                <Route index element={<LandingPage/>}/>
                <Route path="/general/login" element={<LoginPage/>}/>
                <Route path="/general/register" element={<RegisterPage/>}/>
                <Route path="/general/dashboard"
                       element={isLoading ? <LoadingPage /> : authenticated === true ? <DashboardPage /> : <PleaseRegister />}/>
                <Route path="/general/preferences" element={authenticated === true ? <PreferencesPage /> : <PleaseRegister />}/>


                <Route path="/groceries/main"
                       element={authenticated === true ? <GroceriesMainPage/> : <PleaseRegister/>}/>
                <Route path="/groceries/recent-lists"
                       element={authenticated === true ? <RecentListsPage/> : <PleaseRegister/>}/>
                <Route path="/groceries/shopping-mode"
                       element={authenticated === true ? <ShoppingModePage/> : <PleaseRegister/>}/>

                <Route path="/recipes/main" element={<RecipesMainPage/>}/>
                <Route path="/recipes/all" element={<AllRecipesPage/>}/>
                <Route path="/recipes/saved"
                       element={authenticated === true ? <SavedRecipesPage/> : <PleaseRegister/>}/>
                <Route path="/recipes/surprise"
                       element={authenticated === true ? <SurpriseRecipePage/> : <PleaseRegister/>}/>
                <Route path="/recipe/:recipeId" element={<RecipePage/>}/>
                <Route path="/recipes/new" element={authenticated === true ? <RecipeNew/> : <PleaseRegister/>}/>

                <Route path="/general/logout" element={authenticated === true ? <LogOutPage /> : <PleaseRegister />}/>

            </Routes>
        </>
    )
}

export default App
