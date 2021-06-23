import React from "react";
import CocktailLoader from "../Components/CocktailLoader/CocktailLoader";
import {useAuth} from "../Context/AuthContext";

function Profile() {
    const {user} = useAuth();
    return(
        <div className="pagina">
            <h1>Profile</h1>
            <h3>{user.uid}</h3>
            <h3>{user.email}</h3>
            <CocktailLoader />
        </div>
    )
}
export default Profile;