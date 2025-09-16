import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HeaderMenu from "./HeaderMenu";
import WipPopover from "./WipPopover";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router";

export default function Header({ title }) {
    return (
        <>
            <Box sx={{ p: 2 }}>
                <AppBar>
                    <Toolbar>
                        <HeaderMenu />
                        <IconButton
                            size="large"
                            color="inherit"
                            sx={{ mr: 2 }}
                            component={Link}
                            to="/home"
                        >
                            <HomeIcon />
                        </IconButton>
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
