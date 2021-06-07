import React, {useState} from "react";
import Navbar from "./Components/Navbar/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import RandomCocktails from "./Pages/RandomCocktails";
import SearchCocktails from "./Pages/SearchCocktails";
import CocktailByAlcohol from "./Pages/CocktailByAlcohol";
import CocktailByIngredient from "./Pages/CocktailByIngredient";
import AllCocktails from "./Pages/AllCocktails";
import Profile from "./Pages/Profile";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import FourZeroFour from "./Pages/FourZeroFour";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import SearchResult from "./Pages/SearchResult";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import './App.css';

function App() {
    const [authenticated, setAuthenticated] = useState(true);
    const [searchText, setSearchText] = useState("");

    return (
        <Router>
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
                    component={ <Welcome/>}/>
                <PrivateRoute
                    path="/searchcocktails"
                    authenticated={authenticated}
                    component={ <SearchCocktails
                        searchText={searchText}
                        setSearchText={setSearchText}/>}/>
                <PrivateRoute
                    path="/searchresult/:result"
                    authenticated={authenticated}
                    component={ <SearchResult/>}/>
                <PrivateRoute
                    path="/randomcocktails"
                    authenticated={authenticated}
                    component={ <RandomCocktails/>}/>
                <PrivateRoute
                    path="/cocktailbyalcohol"
                    authenticated={authenticated}
                    component={ <CocktailByAlcohol/>}/>
                <PrivateRoute
                    path="/cocktailbyingredient"
                    authenticated={authenticated}
                    component={<CocktailByIngredient/>}/>
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

        </Router>
    );
}

export default App;
