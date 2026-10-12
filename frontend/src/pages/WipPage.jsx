import ConstructionIcon from "@mui/icons-material/Construction";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function WipPage() {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Container>
                    <ConstructionIcon sx={{ fontSize: 100 }} />
                    <Typography variant="h4">
                        This page is currently under construction and will be
                        available soon.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
