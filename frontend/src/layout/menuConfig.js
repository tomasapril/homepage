import CircleIcon from "@mui/icons-material/Circle";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const menuItems = [
    { id: "home", label: "Home", path: "/home", icon: HomeIcon },
    {
        id: "game",
        label: "Game",
        path: "/game",
        icon: SportsEsportsIcon,
        children: [
            {
                id: "game-oware",
                label: "Oware",
                path: "/game/oware",
                icon: CircleIcon,
            },
        ],
    },
    {
        id: "other",
        label: "Other",
        path: "/under-construction",
        icon: ConstructionIcon,
    },
];
