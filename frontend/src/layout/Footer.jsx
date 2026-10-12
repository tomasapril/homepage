import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    p: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} Tomas April.
                </Typography>
            </Box>
        </>
    );
}
