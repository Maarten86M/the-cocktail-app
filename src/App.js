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
import Home from "./Pages/Home";
import FourZeroFour from "./Pages/FourZeroFour";
import Welcome from "./Pages/Welcome";
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

const apiKey = '9973533';

function App() {
    const [authenticated, setAuthenticated] = useState(true);

    return (
        <>
            <Navbar
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}/>
            <Switch>

                <PublicRoute
                    path="/"
                    exact={true}
                    authenticated={authenticated}
                    component={<Home/>}/>

                <PublicRoute
                    path="/login"
                    authenticated={authenticated}
                    component={<Login/>}/>

                <PublicRoute
                    path="/register"
                    authenticated={authenticated}
                    component={<Register/>}/>

                <PublicRoute
                    path="/forgotpassword"
                    authenticated={authenticated}
                    component={<ForgotPassword/>}/>

                <PrivateRoute
                    path="/welcome"
                    authenticated={authenticated}
                    component={<Welcome/>}/>

                <PrivateRoute
                    path="/searchcocktails"
                    authenticated={authenticated}
                    component={<SearchCocktails/>}/>

                <PrivateRoute
                    path="/searchresult/:result"
                    authenticated={authenticated}
                    component={<SearchResult/>}/>

                <PrivateRoute
                    path="/cocktailpage/:id"
                    authenticated={authenticated}
                    component={<CocktailView/>}/>

                <PrivateRoute
                    path="/randomcocktails"
                    authenticated={authenticated}
                    component={<RandomCocktails/>}/>

                <PrivateRoute
                    path="/cocktailbyalcohol"
                    authenticated={authenticated}
                    component={<CocktailByAlcohol/>}/>

                <PrivateRoute
                    path="/cocktailbyalcohollist/:result"
                    authenticated={authenticated}
                    component={<CocktailByAlcoholList/>}/>

                <PrivateRoute
                    path="/cocktailbyingredient"
                    authenticated={authenticated}
                    component={<CocktailByIngredient/>}/>

                <PrivateRoute
                    path="/cocktailbyingredientlist/:result"
                    authenticated={authenticated}
                    component={<CocktailByIngredientList/>}/>

                <PrivateRoute
                    path="/allcocktails"
                    authenticated={authenticated}
                    component={<AllCocktails/>}/>
                <PrivateRoute
                    path="/profile"
                    authenticated={authenticated}
                    component={<Profile/>}/>
                <PrivateRoute
                    path="/help"
                    authenticated={authenticated}
                    component={<Help/>}/>

                <Route path="/">
                    <FourZeroFour/>
                </Route>
            </Switch>
        </>
    )
}

export default App;
