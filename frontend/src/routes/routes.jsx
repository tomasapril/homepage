import { createBrowserRouter } from "react-router";
import Oware from "../features/oware/Oware.jsx";
import StartButton from "../features/oware/StartButton.jsx";

import Game from "../pages/Game.jsx";
import Home from "../pages/Home.jsx";
import WipPage from "../pages/WipPage.jsx";

const basename = import.meta.env.VITE_BASENAME;
const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home,
        },
        {
            path: "home",
            Component: Home,
        },
        {
            path: "game",
            Component: Game,
            children: [
                {
                    index: true,
                    Component: StartButton,
                },
                { path: "oware", Component: Oware },
            ],
        },
        {
            path: "under-construction",
            Component: WipPage,
        },
    ],
    {
        basename: basename || "/",
    },
);

export default router;
