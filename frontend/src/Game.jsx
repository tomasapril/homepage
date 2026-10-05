import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router";

import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";

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
