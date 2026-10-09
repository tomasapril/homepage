import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import router from "./routes.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </StrictMode>,
);
