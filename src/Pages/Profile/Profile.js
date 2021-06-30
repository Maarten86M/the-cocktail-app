import React, {useEffect} from "react";
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import '../../App.css';
import './Profile.css';

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
                        <PageTitle title="Profile"/>
                        <h3>{user.email}</h3>
                        <MainBackButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;