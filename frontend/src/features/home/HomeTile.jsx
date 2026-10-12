import Typography from "@mui/material/Typography";

import Tile from "../../components/Tile.jsx";

export default function HomeTile({ title, to }) {
    return (
        <>
            <Tile to={to}>
                <Typography variant="h6">{title}</Typography>
            </Tile>
        </>
    );
}
