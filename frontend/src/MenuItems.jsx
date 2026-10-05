import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Link as RouterLink } from "react-router";

// TODO: menu item vs subitem sizing
// TODO: icons
// TODO: colors
// TODO: size responsivity
// TODO: visual sign of submenu (chevron or something)
// TODO: hover state
// TODO: active route indication

export function MenuItems({ items, onClose, level = 0 }) {
    const [openItems, setOpenItems] = useState({});

    function toggleItem(id) {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    }

    return (
        <>
            {items.map((item) => {
                const hasChildren = item.children?.length > 0;
                const isOpen = openItems[item.id];

                return (
                    <div key={item.id}>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={hasChildren ? "button" : RouterLink}
                                to={hasChildren ? undefined : item.path}
                                onClick={
                                    hasChildren
                                        ? () => toggleItem(item.id)
                                        : onClose
                                }
                                sx={{ pl: 2 + level * 2, pr: 2 }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>

                        {hasChildren && isOpen && (
                            <List disablePadding>
                                <MenuItems
                                    items={item.children}
                                    onClose={onClose}
                                    level={level + 1}
                                />
                            </List>
                        )}
                    </div>
                );
            })}
        </>
    );
}
