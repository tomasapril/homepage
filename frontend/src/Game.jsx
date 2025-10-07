import Typography from "@mui/material/Typography";
import Header from "./Header";
import Box from "@mui/material/Box";
import WipPopover from "./WipPopover";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import { Link, Outlet } from "react-router";

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
