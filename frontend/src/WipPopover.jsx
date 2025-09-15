import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { cloneElement, useState } from "react";

const GradientCard = styled(Card)(({ theme }) => ({
    maxWidth: 250,
    background: `linear-gradient(to right bottom, ${theme.palette.warning.light}, ${theme.palette.warning.main})`,
    color: "black",
}));

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
                <GradientCard>
                    <CardContent>
                        <Typography variant="subtitle2">
                            This function is curently under construction and
                            will be available soon.
                        </Typography>
                    </CardContent>
                </GradientCard>
            </Popover>
        </>
    );
}
