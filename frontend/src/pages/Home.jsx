import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HomeTile from "../features/home/HomeTile.jsx";

export default function Home() {
    return (
        <>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    <HomeTile to={"/game"} title="Game" />
                    <HomeTile to={"/under-construction"} title="Other" />
                </Grid>
            </Container>
        </>
    );
}
