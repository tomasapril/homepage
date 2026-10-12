import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet, useMatches } from "react-router";
import Breadcrumb from "../components/Breadcrumb.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function MainLayout() {
    const matches = useMatches();

    const pageStyle = [...matches]
        .reverse()
        .find((match) => match.handle?.background);

    const background = pageStyle?.handle?.background;
    const color = pageStyle?.handle?.color;

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    bgcolor: background ?? "background.default",
                    color: color ?? "text.primary",
                }}
            >
                <Header />
                <Container>
                    <Breadcrumb />
                </Container>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Outlet />
                </Box>
                <Footer />
            </Box>
        </>
    );
}
