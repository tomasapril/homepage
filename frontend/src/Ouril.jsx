import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Ouril(p1 = "Player 1", p2 = "Player 2") {
    // TODO: remove console.log()

    const [board, setBoard] = useState([
        [4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4],
    ]);

    const [activePlayer, setActivePlayer] = useState(p1);

    function moveSeeds(pos) {
        console.log(pos);
        // TODO: validate move
        // TODO: move seeds
        // TODO: return new board
    }

    function visualize() {
        console.log(board);
        // TODO: make visualization better
    }

    function play(pos = [0, 0]) {
        const newBoard = moveSeeds(pos);
        setBoard(newBoard);
        visualize();
        console.log(activePlayer + "has played.");
        setActivePlayer(activePlayer == p1 ? p2 : p1);
    }

    return (
        <>
            <Button onClick={play}>Play</Button>
            {/* TODO: add all squares for board */}
        </>
    );
}
