import { createBrowserRouter, Link } from "react-router";
import Home from "./Home";
import Game from "./Game";
import WipPage from "./WipPage";
import Ouril from "./Ouril";
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
                { path: "ouril", Component: Ouril },
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
