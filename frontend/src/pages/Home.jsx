import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HomeTile from "../features/home/HomeTile.jsx";

import Footer from "../layout/Footer.jsx";
import Header from "../layout/Header.jsx";

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
                    <Grid
                        container
                        spacing={2}
                        sx={{ justifyContent: "center" }}
                    >
                        <HomeTile to={"/game"} title="Game" />
                        <HomeTile to={"/under-construction"} title="Other" />
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>
    );
}
