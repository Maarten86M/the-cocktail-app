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
    }, []);


    return (
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    <CocktailCardLogo/>
                </figure>
            </section>
            <section className="right-section-container">
                <article className="right-box-container">
                    <div className="profile-info">
                        <PageTitle title="Profile"/>
                        <h3>{user.email}</h3>
                    </div>
                    <MainBackButton/>
                </article>
            </section>
        </main>
    )
}

export default Profile;