import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// TODO: refactor this component

export default function InfoDialog({ children, open, handleClose, title }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    color: "grey",
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}
