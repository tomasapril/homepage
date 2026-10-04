import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as RouterLink } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { menuItems } from "./menuItems";

// TODO: add submenu functionality
// TODO: style the new menu

export default function HeaderMenu() {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    function handleToggle() {
        setOpen((prev) => !prev);
    }

    const sidebarDrawer = (
        <Drawer open={open} onClose={handleClose}>
            <List>
                {menuItems.map((item) => (
                    <ListItem>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            onClick={handleClose}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
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

            {sidebarDrawer}
        </>
    );
}
