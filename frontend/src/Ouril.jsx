import Button from "@mui/material/Button";
import { useState } from "react";

export default function Ouril({ p1 = "Player 1", p2 = "Player 2" }) {
    // TODO: remove console.log()

    const [board, setBoard] = useState([
        [4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4],
    ]);

    const [activePlayer, setActivePlayer] = useState(p1);
    const [scores, setScores] = useState([0, 0]);

    function moveSeeds([side, place]) {
        console.log("Side: " + side);
        console.log("Place: " + place);
        let flatBoard = board.flat();
        const pos = side * 6 + place;
        // TODO: validate move
        const numberOfSeeds = flatBoard[pos];
        console.log(numberOfSeeds);
        flatBoard[pos] = 0;
        for (let i = pos + 1; i <= pos + numberOfSeeds; i++) {
            flatBoard[i % flatBoard.length]++;
        }
        // TODO: eat the children (capture seeds)
        const [newFlatBoard, eaten] = eat(flatBoard, pos + numberOfSeeds);
        setScores(
            activePlayer == p1
                ? [scores[0] + eaten, scores[1]]
                : [scores[0], scores[1] + eaten]
        );
        return reshape(newFlatBoard);
    }

    function eat(flatBoard, pos, eaten = 0) {
        if (flatBoard[pos] >= 2 && flatBoard[pos] <= 3) {
            eaten += flatBoard[pos];
            flatBoard[pos] = 0;
            const nextPos = (pos - 1 + flatBoard.length) % flatBoard.length;
            eat(flatBoard, nextPos, eaten);
        } else {
            return [flatBoard, eaten];
        }
    }

    function reshape(flatBoard) {
        const shapedBoard = [];
        shapedBoard.push(flatBoard.slice(0, 6));
        shapedBoard.push(flatBoard.slice(6, 12));
        return shapedBoard;
    }

    function visualize(boardToShow) {
        console.log([...boardToShow[1]].reverse());
        console.log(boardToShow[0]);
        // TODO: make visualization better
    }

    function play(pos = [0, 0]) {
        const newBoard = moveSeeds(pos);
        setBoard(newBoard);
        visualize(newBoard);
        console.log(activePlayer + " has played.");
        setActivePlayer(activePlayer == p1 ? p2 : p1);
    }

    return (
        <>
            <Button onClick={() => play([0, 0])}>Play</Button>
            <Button onClick={() => play([0, 1])}>Play</Button>
            <Button onClick={() => play([0, 2])}>Play</Button>
            <Button onClick={() => play([0, 3])}>Play</Button>
            <Button onClick={() => play([0, 4])}>Play</Button>
            <Button onClick={() => play([0, 5])}>Play</Button>
            {/* TODO: add all squares for board */}
        </>
    );
}
