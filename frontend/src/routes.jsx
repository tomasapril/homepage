import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Game from "./Game";
import WipPage from "./WipPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/game",
        Component: Game,
    },
    {
        path: "/under-construction",
        Component: WipPage,
    },
]);

export default router;
