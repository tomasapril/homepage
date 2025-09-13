import { Link } from "react-router";
import "./App.css";
import Button from "@mui/material/Button";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <br />
            <Link to={"/game"}>
                <Button variant="contained" color="success">
                    Eat the children!
                </Button>
            </Link>
        </>
    );
}
