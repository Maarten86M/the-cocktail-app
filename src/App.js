import React, {useState} from "react";
import Navbar from "./Components/Navbar/NavBar";
import {
    Switch,
    Route,
} from 'react-router-dom';
import RandomCocktails from "./Pages/RandomCocktails/RandomCocktails";
import SearchCocktails from "./Pages/SearchCocktails/SearchCocktails";
import CocktailByAlcohol from "./Pages/CocktailByAlcohol/CocktailByAlcohol";
import CocktailByIngredient from "./Pages/CocktailByIngredient/CocktailByIngredient";
import AllCocktails from "./Pages/AllCocktails/AllCocktails";
import Profile from "./Pages/Profile";
import Help from "./Pages/Help";
import Home from "./Pages/Home/Home";
import FourZeroFour from "./Pages/FourZeroFour";
import Welcome from "./Pages/Welcome/Welcome";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import SearchResult from "./Pages/SearchCocktails/SearchResult";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import CocktailView from "./Pages/CocktailView/CocktailView";
import CocktailByAlcoholList from "./Pages/CocktailByAlcohol/CocktailByAlcoholList";
import CocktailByIngredientList from "./Pages/CocktailByIngredient/CocktailByIngredientList";
import './App.css';
import {useAuth} from "./Context/AuthContext";


function App() {
    const {user} = useAuth();
    return (
        <>
            <Navbar
                authenticated={user}/>
            <Switch>

                <PublicRoute
                    path="/"
                    exact={true}
                    authenticated={user}
                    component={<Home/>}/>

                <PublicRoute
                    path="/login"
                    authenticated={user}
                    component={<Login/>}/>

                <PublicRoute
                    path="/register"
                    authenticated={user}
                    component={<Register/>}/>

                <PublicRoute
                    path="/forgotpassword"
                    authenticated={user}
                    component={<ForgotPassword/>}/>

                <PrivateRoute
                    path="/welcome"
                    authenticated={user}
                    component={<Welcome/>}/>

                <PrivateRoute
                    path="/searchcocktails"
                    authenticated={user}
                    component={<SearchCocktails/>}/>

                <PrivateRoute
                    path="/searchresult/:result"
                    authenticated={user}
                    component={<SearchResult/>}/>

                <PrivateRoute
                    path="/cocktailpage/:id"
                    authenticated={user}
                    component={<CocktailView/>}/>

                <PrivateRoute
                    path="/randomcocktails"
                    authenticated={user}
                    component={<RandomCocktails/>}/>

                <PrivateRoute
                    path="/cocktailbyalcohol"
                    authenticated={user}
                    component={<CocktailByAlcohol/>}/>

                <PrivateRoute
                    path="/cocktailbyalcohollist/:result"
                    authenticated={user}
                    component={<CocktailByAlcoholList/>}/>

                <PrivateRoute
                    path="/cocktailbyingredient"
                    authenticated={user}
                    component={<CocktailByIngredient/>}/>

                <PrivateRoute
                    path="/cocktailbyingredientlist/:result"
                    authenticated={user}
                    component={<CocktailByIngredientList/>}/>

                <PrivateRoute
                    path="/allcocktails"
                    authenticated={user}
                    component={<AllCocktails/>}/>
                <PrivateRoute
                    path="/profile"
                    authenticated={user}
                    component={<Profile/>}/>
                <PrivateRoute
                    path="/help"
                    authenticated={user}
                    component={<Help/>}/>

                <Route path="/">
                    <FourZeroFour/>
                </Route>
            </Switch>
        </>
    )
}

export default App;
