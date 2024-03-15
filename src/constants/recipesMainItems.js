
export const recipesMainItems = [
    {
        authenticationRequired: false,
        image: {
            imgDescription: "Een achtergrond-foto van een pokebowl-gerecht",
            imgClass: "block-item__img--recipes-all",
        },
        content: {
            blockItemTitle: "Alle recepten",
            blockItemSubtitle: "Bekijk alle heerlijke recepten voor inspiratie",
        },
        button: {
            blockItemButtonClass: "recipes-main__button",
            buttonText: "Ga naar alle recepten",
            navigateTo: "/recipes/all",
        }
    },
    {
        authenticationRequired: true,
        image: {
            imgDescription: "Een achtergrond-foto van een hamburger",
            imgClass: "block-item__img--recipes-surprise",
            imgClassNotAuth: "block-item__img--recipes-surprise-not-auth",
        },
        content: {
            blockItemTitle: "Verrassingsrecept",
            blockItemSubtitle: "Bekijk hier je verrassingsrecept voor vandaag",
        },
        button: {
            blockItemButtonClass: "recipes-main__button",
            blockItemButtonClassNotAuth: "recipes-main__button--not-auth",
            buttonText: "Ga naar verrassingsrecept",
            navigateTo: "/recipes/surprise",
        }
    },
    {
        authenticationRequired: true,
        image: {
            imgDescription: "Een achtergrond-foto van een pasta-gerecht",
            imgClass: "block-item__img--recipes-add",
            imgClassNotAuth: "block-item__img--recipes-add-not-auth",
        },
        content: {
            blockItemTitle: "Voeg toe",
            blockItemSubtitle: "Mis je een recept? Voeg het hier toe!",
        },
        button: {
            blockItemButtonClass: "recipes-main__button",
            blockItemButtonClassNotAuth: "recipes-main__button--not-auth",
            buttonText: "Ga naar toevoegen",
            navigateTo: "/recipes/add",
        }
    }
];