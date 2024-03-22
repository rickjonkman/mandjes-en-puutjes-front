
import RecipeTopInfo from "./RecipeTopInfo.jsx";
import RecipeTitle from "../../page-title/RecipeTitle.jsx";
import RecipeImage from "./RecipeImage.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const RecipePageHeader = ({ recipeName, prepTime, imageFile, creator, tags  }) => {

    const [recipeImage, setRecipeImage] = useState({});
    const url = `http://localhost:8080/api/v1/recipes/open/download-image/${imageFile}`;

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(url, { responseType: "blob" });
                const imageUrl = URL.createObjectURL(response.data);
                setRecipeImage(imageUrl);
            } catch (e) {
                console.error("Error fetching image: ", e);
            }
        }

        void fetchImage();

        return console.log("Image fetched");
    }, [imageFile]);



    return (
        <>
            <RecipeTitle recipeTitle={recipeName} creator={creator} />

            <div className="recipe-page__top-section">

                <RecipeTopInfo
                    recipeName={recipeName}
                    prepTime={prepTime}
                    creator={creator}
                    tags={tags}
                />

                <RecipeImage
                    imgSrc={recipeImage}
                    imgDescription="Een foto van het recept"
                    imgId="recipe-page__top-image"
                />

            </div>
        </>

    );
};

export default RecipePageHeader;