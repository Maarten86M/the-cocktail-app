import React from "react";
import Navbar from "./Components/Navbar/NavBar";
import {Switch, Route,} from 'react-router-dom';
import RandomCocktails from "./Pages/RandomCocktails/RandomCocktails";
import SearchCocktails from "./Pages/SearchCocktails/SearchCocktails";
import CocktailByAlcohol from "./Pages/CocktailByAlcohol/CocktailByAlcohol";
import CocktailByIngredient from "./Pages/CocktailByIngredient/CocktailByIngredient";
import AllCocktails from "./Pages/AllCocktails/AllCocktails";
import Profile from "./Pages/Profile/Profile";
import Help from "./Pages/Help/Help";
import Home from "./Pages/Home/Home";
import FourZeroFour from "./Pages/404/FourZeroFour";
import Welcome from "./Pages/Welcome/Welcome";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SearchResult from "./Pages/SearchCocktails/SearchResult";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import CocktailView from "./Pages/CocktailView/CocktailView";
import CocktailByAlcoholList from "./Pages/CocktailByAlcohol/CocktailByAlcoholList";
import CocktailByIngredientList from "./Pages/CocktailByIngredient/CocktailByIngredientList";
import './App.css';


function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <PublicRoute
                    path="/"
                    exact={true}
                    component={<Home/>}/>
                <PublicRoute
                    path="/login"
                    component={<Login/>}/>
                <PublicRoute
                    path="/register"
                    component={<Register/>}/>
                <PublicRoute
                    path="/forgotpassword"
                    component={<ForgotPassword/>}/>
                <PrivateRoute
                    path="/welcome"
                    component={<Welcome/>}/>
                <PrivateRoute
                    path="/searchcocktails"
                    component={<SearchCocktails/>}/>
                <PrivateRoute
                    path="/searchresult/:result"
                    component={<SearchResult/>}/>
                <PrivateRoute
                    path="/cocktailpage/:id"
                    component={<CocktailView/>}/>
                <PrivateRoute
                    path="/randomcocktails"
                    component={<RandomCocktails/>}/>
                <PrivateRoute
                    path="/cocktailbyalcohol"
                    component={<CocktailByAlcohol/>}/>
                <PrivateRoute
                    path="/cocktailbyalcohollist/:result"
                    component={<CocktailByAlcoholList/>}/>
                <PrivateRoute
                    path="/cocktailbyingredient"
                    component={<CocktailByIngredient/>}/>
                <PrivateRoute
                    path="/cocktailbyingredientlist/:result"
                    component={<CocktailByIngredientList/>}/>
                <PrivateRoute
                    path="/allcocktails"
                    component={<AllCocktails/>}/>
                <PrivateRoute
                    path="/profile"
                    component={<Profile/>}/>
                <PrivateRoute
                    path="/help"
                    component={<Help/>}/>
                <Route path="/">
                    <FourZeroFour/>
                </Route>
            </Switch>
        </>
    )
}

export default App;
