import { createBrowserRouter } from "react-router";

import Game from "./Game";
import Home from "./Home";
import Oware from "./Oware";
import StartButton from "./StartButton";
import WipPage from "./WipPage";

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
