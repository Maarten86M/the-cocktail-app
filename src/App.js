import './App.css';
import Navbar from "./components/Navbar/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import RandomCocktails from "./pages/RandomCocktails";
import SearchCocktails from "./pages/SearchCocktails";
import CocktailByAlcohol from "./pages/CocktailByAlcohol";
import CocktailByIngredient from "./pages/CocktailByIngredient";
import AllCocktails from "./pages/AllCocktails";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/searchcocktails">
                    <SearchCocktails/>
                </Route>

                <Route path="/randomcocktails">
                    <RandomCocktails/>
                </Route>


                <Route path="/cocktailbyalcohol">
                    <CocktailByAlcohol/>
                </Route>

                <Route path="/cocktailbyingredient">
                    <CocktailByIngredient/>
                </Route>

                <Route path="/allcocktails">
                    <AllCocktails/>
                </Route>

                <Route path="/profile">
                    <Profile/>
                </Route>

                <Route path="/help">
                    <Help/>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
