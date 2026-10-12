import { createBrowserRouter } from "react-router";
import Oware from "../features/oware/Oware.jsx";
import StartButton from "../features/oware/StartButton.jsx";

import MainLayout from "../layout/MainLayout.jsx";

import Game from "../pages/Game.jsx";
import Home from "../pages/Home.jsx";
import WipPage from "../pages/WipPage.jsx";

const basename = import.meta.env.VITE_BASENAME;
const router = createBrowserRouter(
    [
        {
            Component: MainLayout,
            children: [
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
                    handle: {
                        background: "warning.light",
                        color: "warning.contrastText",
                    },
                },
            ],
        },
    ],
    {
        basename: basename || "/",
    },
);

export default router;
