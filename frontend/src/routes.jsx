import { createBrowserRouter, Link } from "react-router";
import Home from "./Home";
import Game from "./Game";
import WipPage from "./WipPage";
import Oware from "./Oware";
import StartButton from "./StartButton";

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
    }
);

export default router;
