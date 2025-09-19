import Button from "@mui/material/Button";
import { Link } from "react-router";

export default function StartButton() {
    return (
        <>
            <Button variant="contained" component={Link} to="ouril">
                Start
            </Button>
        </>
    );
}
