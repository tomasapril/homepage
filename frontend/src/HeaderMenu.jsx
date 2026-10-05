import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { menuItems } from "./menuConfig";
import { MenuItems } from "./MenuItems";

export default function HeaderMenu() {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    function handleToggle() {
        setOpen((prev) => !prev);
    }

    const sidebarDrawer = (
        <Drawer
            open={open}
            onClose={handleClose}
            slotProps={{ paper: { sx: { width: { xs: 180, sm: 240 } } } }}
        >
            <List>
                <MenuItems items={menuItems} onClose={handleClose} />
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
