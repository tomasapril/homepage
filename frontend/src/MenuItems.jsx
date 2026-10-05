import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

const transitionDuration = 200;

function containsPath(item, pathName) {
    if (item.path === pathName) {
        return true;
    }

    return item.children?.some((child) => containsPath(child, pathName));
}

export function MenuItems({ items, onClose, level = 0 }) {
    const [openItems, setOpenItems] = useState({});
    const location = useLocation();

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
                const isOpen =
                    openItems[item.id] ?? containsPath(item, location.pathname);

                return (
                    <div key={item.id}>
                        <ListItem
                            disablePadding
                            secondaryAction={
                                hasChildren && (
                                    <IconButton
                                        onClick={() => toggleItem(item.id)}
                                        color="inherit"
                                    >
                                        <ChevronRightIcon
                                            sx={{
                                                transform: isOpen
                                                    ? "rotate(90deg)"
                                                    : "none",
                                                transition: `transform ${transitionDuration}ms`,
                                            }}
                                        />
                                    </IconButton>
                                )
                            }
                        >
                            <ListItemButton
                                component={item.path ? NavLink : "button"}
                                to={item.path}
                                end
                                onClick={
                                    item.path
                                        ? onClose
                                        : hasChildren
                                          ? () => toggleItem(item.id)
                                          : undefined
                                }
                                sx={{
                                    pl: 2 + level * 2,
                                    pr: 2,
                                    minHeight: level < 2 ? 48 : 32,
                                    py: level < 2 ? 1 : 0,
                                    "&.active": {
                                        backgroundColor: "action.selected",
                                        color: "primary.main",
                                    },
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

                        {hasChildren && (
                            <Collapse
                                in={isOpen}
                                timeout={transitionDuration}
                                unmountOnExit
                            >
                                <List disablePadding>
                                    <MenuItems
                                        items={item.children}
                                        onClose={onClose}
                                        level={level + 1}
                                    />
                                </List>
                            </Collapse>
                        )}
                    </div>
                );
            })}
        </>
    );
}
