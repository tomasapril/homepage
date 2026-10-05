import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Link as RouterLink } from "react-router";

// TODO: size responsivity
// TODO: visual sign of submenu (chevron or something)
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
                                sx={{
                                    pl: 2 + level * 2,
                                    pr: 2,
                                    minHeight: level < 2 ? 48 : 32,
                                    py: level < 2 ? 1 : 0,
                                }}
                            >
                                {item.icon && (
                                    <ListItemIcon
                                        sx={{ minWidth: 36, color: "inherit" }}
                                    >
                                        <item.icon />
                                    </ListItemIcon>
                                )}

                                <ListItemText
                                    primary={item.label}
                                    slotProps={{
                                        primary: {
                                            sx: {
                                                fontSize:
                                                    level === 0
                                                        ? "1rem"
                                                        : "0.9rem",
                                                fontWeight:
                                                    level === 0 ? "500" : "400",
                                            },
                                        },
                                    }}
                                />
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
