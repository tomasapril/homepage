import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Link } from "react-router";

const GradientCard = styled(Card)(({ theme }) => ({
    aspectRatio: "2/1",
    display: "flex",
    background: `linear-gradient(to right bottom, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    color: theme.palette.primary.contrastText,
}));

export default function Tile({ to, children }) {
    return (
        <>
            <Grid size={{ xs: 6, lg: 4 }}>
                <GradientCard>
                    <CardActionArea
                        sx={{
                            p: 4,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                        component={Link}
                        to={to}
                    >
                        {children}
                    </CardActionArea>
                </GradientCard>
            </Grid>
        </>
    );
}
