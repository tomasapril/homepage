import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router";

export default function HeaderMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleClick(e) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                    component={RouterLink}
                    to="/home"
                    onClick={handleClose}
                >
                    Home
                </MenuItem>
                <MenuItem
                    component={RouterLink}
                    to="/game"
                    onClick={handleClose}
                >
                    Game
                </MenuItem>
            </Menu>
        </>
    );
}
