import React from 'react';
import ImageWrapper from "../ui/image/ImageWrapper.jsx";
import PizzaImage from "../../assets/images/pizza.png";
import "/src/scss/utility-components.scss";

const IsLoadingComponent = () => {
    return (
        <div className="utility__is-loading">
            <div className="utility__is-loading--text">
                <h1>Even wachten...</h1>
                <h3>Even wachten nog...</h3>
            </div>

            <div className="img--wrapper">
                <img
                    src={PizzaImage}
                    alt="Loading"
                />
            </div>
        </div>
    );
};

export default IsLoadingComponent;