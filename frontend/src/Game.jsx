import Typography from "@mui/material/Typography";
import Header from "./Header";
import Box from "@mui/material/Box";
import WipPopover from "./WipPopover";
import Button from "@mui/material/Button";
import Footer from "./Footer";

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
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Typography variant="h4">Eat the children!</Typography>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <WipPopover>
                        <Button variant="contained">Start</Button>
                    </WipPopover>
                </Box>
                <Footer />
            </Box>
        </>
    );
}
