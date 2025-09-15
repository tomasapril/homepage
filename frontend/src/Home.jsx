import Box from "@mui/material/Box";
import Footer from "./Footer";
import Header from "./Header";

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
                {/* TODO: choose home page design
                 */}
                {/* TODO: add home page content
                 */}
                <Box sx={{ flexGrow: 1 }}></Box>
                <Footer />
            </Box>
        </>
    );
}
