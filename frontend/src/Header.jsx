import HomeIcon from "@mui/icons-material/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

import HeaderMenu from "./HeaderMenu";
import WipPopover from "./WipPopover";

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
