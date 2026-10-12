import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

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
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle sx={{ pr: 6 }}>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}
