import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router";

import Breadcrumb from "../components/Breadcrumb.jsx";
import Footer from "../layout/Footer.jsx";
import Header from "../layout/Header.jsx";

export default function Game() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <Header title={"Game"} />
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    <Breadcrumb />

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Outlet />
                    </Box>
                </Container>
                <Footer />
            </Box>
        </>
    );
}
