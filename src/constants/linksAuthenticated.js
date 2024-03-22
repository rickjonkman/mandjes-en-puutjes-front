
export const linksAuthenticated = [
    {
        id: 1,
        navLink: "/general/dashboard",
        title: "Dashboard",
        subPages: [],
    },
    {
        id: 2,
        navLink: "/groceries/main",
        title: "Boodschappen",
        subPages: [
            {
                id: 1,
                navLink: "/groceries/shopping-mode",
                title: "Winkelmodus",
            },
            {
                id: 2,
                navLink: "/groceries/current-list",
                title: "Huidige boodschappenlijst",
            },
            {
                id: 3,
                navLink: "/groceries/recent-lists",
                title: "Recente boodschappenlijsten",
            }
        ],
    },
    {
        id: 3,
        navLink: "/recipes/main",
        title: "Recepten",
        subPages: [
            {
                id: 1,
                navLink: "/recipes/all",
                title: "Alle recepten",
            },
            {
                id: 2,
                navLink: "/recipes/saved",
                title: "Opgeslagen recepten",
            },
            {
                id: 3,
                navLink: "/recipes/add",
                title: "Recept toevoegen",
            }
        ],
    },
    {
        id: 4,
        navLink: "/general/logout",
        title: "Uitloggen",
        subPages: [],
    }
]