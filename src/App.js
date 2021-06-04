import React, {useState} from "react";
import Navbar from "./components/Navbar/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory
} from 'react-router-dom';
import RandomCocktails from "./pages/RandomCocktails";
import SearchCocktails from "./pages/SearchCocktails";
import CocktailByAlcohol from "./pages/CocktailByAlcohol";
import CocktailByIngredient from "./pages/CocktailByIngredient";
import AllCocktails from "./pages/AllCocktails";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Home from "./pages/Home";
import FourZeroFour from "./pages/FourZeroFour";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import './App.css';
import SearchResult from "./pages/SearchResult";

function App() {
    const [authenticated, setAuthenticated] = useState(true);
    const [searchText, setSearchText] = useState("");

    return (
        <Router>
            <Navbar
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}/>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    {!authenticated ? <Login/> : <Redirect to="/welcome"/>}
                </Route>

                <Route path="/register">
                    {!authenticated ? <Register/> : <Redirect to="/welcome"/>}
                </Route>

                <Route path="/forgotpassword">
                    {!authenticated ? <ForgotPassword/> : <Redirect to="/welcome"/>}
                </Route>


                <Route path="/welcome">
                    {authenticated ? <Welcome/> : <Redirect to="/login"/>}
                </Route>


                <Route path="/searchcocktails">
                    {authenticated ? <SearchCocktails
                        searchText={searchText}
                        setSearchText={setSearchText}
                    /> : <Redirect to="/login"/>}
                </Route>

                <Route exact path="/searchresult/:result">
                    {authenticated ? <SearchResult/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/randomcocktails">
                    {authenticated ? <RandomCocktails/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/cocktailbyalcohol">
                    {authenticated ? <CocktailByAlcohol/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/cocktailbyingredient">
                    {authenticated ? <CocktailByIngredient/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/allcocktails">
                    {authenticated ? <AllCocktails/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/profile">
                    {authenticated ? <Profile/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/help">
                    {authenticated ? <Help/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/">
                    <FourZeroFour/>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
