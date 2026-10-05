import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router";
import { useLocation } from "react-router";

import { menuItems } from "./menuConfig";

function findBreadcrumbs(items, path, parents = []) {
    for (const item of items) {
        const current = [...parents, item];

        if (item.path === path) {
            return current;
        }

        if (item.children) {
            const result = findBreadcrumbs(item.children, path, current);

            if (result) {
                return result;
            }
        }
    }

    return [];
}

export default function Breadcrumb() {
    const location = useLocation();

    const breadcrumbs = findBreadcrumbs(menuItems, location.pathname);

    if (breadcrumbs.length < 2) {
        return null;
    }

    return (
        <Breadcrumbs>
            {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return isLast ? (
                    <Typography key={item.id} color="text.primary">
                        {item.label}
                    </Typography>
                ) : (
                    <Link
                        key={item.id}
                        component={RouterLink}
                        to={item.path}
                        underline="hover"
                        color="inherit"
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}
