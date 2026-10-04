import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Link as RouterLink } from "react-router";

export function MenuItems({ items, onClose }) {
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
                            {hasChildren ? (
                                <ListItemButton
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            ) : (
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.path}
                                    onClick={onClose}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            )}
                        </ListItem>

                        {hasChildren && isOpen && (
                            <List sx={{ p1: 2 }}>
                                <MenuItems
                                    items={item.children}
                                    onClose={onClose}
                                />
                            </List>
                        )}
                    </div>
                );
            })}
        </>
    );
}
