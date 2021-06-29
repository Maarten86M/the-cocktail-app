import React, {useEffect} from "react";
import CocktailLoader from "../../Components/CocktailLoader/CocktailLoader";
import {useAuth} from "../../Context/AuthContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import '../../App.css';
import './Profile.css';
import {useCocktailContext} from "../../Context/CocktailContext";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";

function Profile() {

    const {user} = useAuth();
    const {setPageTitle} = useCocktailContext();

    useEffect(() => {
        setPageTitle("Your Profile");
    }, [])


    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>
            <div className="right-section-container">
                <div className="right-box-container">
                    <div className="profile-info">
                        <h1>Profile</h1>
                        <h3>{user.email}</h3>
                        <MainBackButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;