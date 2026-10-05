import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Footer from "./Footer";
import Header from "./Header";
import HomeTile from "./HomeTile";

export default function Home() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <Header title={"Home"} />
                <Container sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} justifyContent="center">
                        <HomeTile to={"/game"} title="Game" />
                        <HomeTile to={"/under-construction"} title="Other" />
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>
    );
}
