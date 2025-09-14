import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Game from "./Game";

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
]);

export default router;
