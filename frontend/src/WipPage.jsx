import ConstructionIcon from "@mui/icons-material/Construction";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Footer from "./Footer";
import Header from "./Header";

export default function WipPage() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    bgcolor: "warning.light",
                    color: "warning.contrastText",
                }}
            >
                <Header title="WIP" />
                <Container
                    sx={{
                        flexGrow: 1,
                        alignContent: "center",
                        textAlign: "center",
                    }}
                >
                    <ConstructionIcon sx={{ fontSize: 100 }} />
                    <Typography variant="h4">
                        This page is currently under construction and will be
                        available soon.
                    </Typography>
                </Container>
                <Footer />
            </Box>
        </>
    );
}
