import PreferenceTile from "./PreferenceTile.jsx";
import DefaultButton from "../../ui/buttons/DefaultButton.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../../../context/UserContext.jsx";
import Meat from "../../../assets/icons/meat.svg";
import Fish from "../../../assets/icons/fish.svg";
import Vegan from "../../../assets/icons/vegan.svg";
import Vegetarian from "../../../assets/icons/vega.svg";

const UserPreferences = () => {

    const navigate = useNavigate();
    const { preferences, userDetails, setUserDetails } = useContext(UserContext);

    const handleChangePreference = (preference) => {
        setUserDetails({
            ...userDetails,
            preferences: {
                ...preferences,
                [preference]: !preferences[preference],
            }
        })
    }

    const userPreferences = [
        {
            showPreference: preferences.showMeat,
            img: Meat,
            imgDescription: 'Vlees',
            preferenceDescription: 'showMeat',
            title: 'Vlees'
        },
        {
            showPreference: preferences.showFish,
            img: Fish,
            imgDescription: 'Vis',
            preferenceDescription: 'showFish',
            title: 'Vis'
        },
        {
            showPreference: preferences.showVega,
            img: Vegan,
            imgDescription: 'Vegan',
            preferenceDescription: 'showVega',
            title: 'Vegan'
        },
        {
            showPreference: preferences.showVegan,
            img: Vegetarian,
            imgDescription: 'Vegetarisch',
            preferenceDescription: 'showVegan',
            title: 'Vegetarisch'
        }
    ]

    return (
        <div className="user-preferences__content">

            <form className="user-preferences__form">

                <section className="user-preferences__form-container">

                    {
                        userPreferences.map((preference, index) => {
                            return (
                                <PreferenceTile
                                    key={index}
                                    preferenceImg={preference.img}
                                    preferenceDescription={preference.imgDescription}
                                    preferenceTitle={preference.title}
                                    showPreference={preference.showPreference}
                                    handleChangePreference={() => handleChangePreference(preference.preferenceDescription)}

                                />
                            )
                        })
                    }

                </section>

                <section className="user-preferences__form-button">
                    <DefaultButton
                        buttonText="Terug naar Dashboard"
                        buttonClass="user-preferences__button"
                        onClickHandler={() => navigate("/general/dashboard")}
                    />
                </section>

            </form>

        </div>
    );
};

export default UserPreferences;