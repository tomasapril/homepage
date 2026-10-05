// export const menuItems = [
//     { id: "home", label: "Home", path: "/home" },
//     { id: "game", label: "Game", path: "/game" },
// ];

export const menuItems = [
    { id: "home", label: "Home", path: "/home" },
    {
        id: "game",
        label: "Game",
        children: [
            {
                id: "game-deeper",
                label: "Deeper",
                children: [
                    { id: "game-deeper-home", label: "Home", path: "/home" },
                ],
            },
            { id: "game-oware", label: "Oware", path: "/game/oware" },
        ],
    },
];
