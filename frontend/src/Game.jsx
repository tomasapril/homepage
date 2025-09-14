import Typography from "@mui/material/Typography";
import Header from "./Header";
import Box from "@mui/material/Box";

export default function Game() {
    return (
        <>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h1">Eat the children!</Typography>
            </Box>
        </>
    );
}
