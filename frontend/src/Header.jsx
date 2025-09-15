import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HeaderMenu from "./HeaderMenu";
import WipPopover from "./WipPopover";

export default function Header({ title }) {
    return (
        <>
            <Box sx={{ p: 2, flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <HeaderMenu />
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {title ? title : "Tomas April"}
                        </Typography>
                        <WipPopover>
                            <Button color="inherit">Login</Button>
                        </WipPopover>
                    </Toolbar>
                </AppBar>
            </Box>
            <Toolbar />
        </>
    );
}
