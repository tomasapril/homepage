import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";

// TODO: rewrite to sidebar menu
// TODO: create and use central item for defining menu items
// TODO: add submenu functionality

export default function HeaderMenu() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    function handleClose() {
        setClosing(true);
        setOpen(false);
    }

    function handleTransitionEnd() {
        setClosing(false);
    }

    function handleToggle() {
        if (!closing) {
            setOpen(!open);
        }
    }

    const sidebar = (
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Placeholder"} />
                </ListItemButton>
            </ListItem>
        </List>
    );

    const sidebarParent = (
        <Drawer
            open={open}
            onClose={handleClose}
            onTransitionEnd={handleTransitionEnd}
        >
            {sidebar}
        </Drawer>
    );

    return (
        <>
            <IconButton
                onClick={handleToggle}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
            </Menu> */}
            {sidebarParent}
        </>
    );
}
