import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { cloneElement, useState } from "react";

export default function WipPopover({ children }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleClick(e) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const childClickable = cloneElement(children, { onClick: handleClick });

    return (
        <>
            {childClickable}
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Card
                    sx={{
                        maxWidth: 250,
                        background:
                            "linear-gradient(to right bottom, #fdd835, #ffa000)",
                    }}
                >
                    <CardContent>
                        <Typography variant="subtitle2">
                            This function is curently under construction and
                            will be available soon.
                        </Typography>
                    </CardContent>
                </Card>
            </Popover>
        </>
    );
}
