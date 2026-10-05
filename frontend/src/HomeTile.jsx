import Typography from "@mui/material/Typography";

import Tile from "./Tile";

export default function HomeTile({ title, to }) {
    return (
        <>
            <Tile to={to}>
                <Typography variant="h6">{title}</Typography>
            </Tile>
        </>
    );
}
