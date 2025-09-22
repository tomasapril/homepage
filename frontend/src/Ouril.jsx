import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";

export default function Ouril({ p1 = "Player 1", p2 = "Player 2" }) {
    // TODO: remove console.log()

    const [board, setBoard] = useState([
        [4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4],
    ]);

    const [activePlayer, setActivePlayer] = useState(p1);
    const [scores, setScores] = useState([0, 0]);
    const [winner, setWinner] = useState();

    function isGameOver() {
        let hasWinner = false;
        let gameOver = false;
        const maxScore = Math.max(...scores);
        if (scores[0] == 24 && scores[1] == 24) {
            gameOver = true;
        } else if (maxScore > 24) {
            hasWinner = true;
        } else if (!hasValidMoves(activePlayer == p1 ? 0 : 1)) {
            hasWinner = true;
        }
        if (hasWinner) {
            const winnerIndex = scores.findIndex((x) => x == maxScore);
            setWinner(winnerIndex == 0 ? p1 : p2);
            gameOver = true;
        }
        return gameOver;
    }

    function hasValidMoves(side) {
        return board[side].some((_, i) => validateMove([side, i]));
    }

    function validateMove([side, place]) {
        const playerSide = activePlayer == p1 ? 0 : 1;
        const opponentSide = (playerSide + 1) % 2;
        if (side != playerSide) {
            return false;
        }
        if (board[side][place] == 0) {
            return false;
        }
        if (board[opponentSide].every((x) => x == 0)) {
            if (board[side][place] < board[side].length - place) {
                return false;
            }
        }
        return true;
    }

    function moveSeeds([side, place]) {
        // TODO: implement skipping of own house
        console.log("Side: " + side);
        console.log("Place: " + place);
        let flatBoard = board.flat();
        const pos = side * 6 + place;
        const numberOfSeeds = flatBoard[pos];
        console.log(numberOfSeeds);
        flatBoard[pos] = 0;
        for (let i = pos + 1; i <= pos + numberOfSeeds; i++) {
            flatBoard[i % flatBoard.length]++;
        }
        const [newFlatBoard, eaten] = eat(
            flatBoard,
            (pos + numberOfSeeds) % flatBoard.length
        );
        setScores(
            activePlayer == p1
                ? [scores[0] + eaten, scores[1]]
                : [scores[0], scores[1] + eaten]
        );
        return reshape(newFlatBoard);
    }

    function eat(flatBoard, pos, eaten = 0) {
        // TODO: only eat from opponent's side
        if (flatBoard[pos] >= 2 && flatBoard[pos] <= 3) {
            eaten += flatBoard[pos];
            flatBoard[pos] = 0;
            const nextPos = (pos - 1 + flatBoard.length) % flatBoard.length;
            return eat(flatBoard, nextPos, eaten);
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
    }

    function play(pos = [0, 0]) {
        const moveIsValid = validateMove(pos);
        if (!moveIsValid) {
            alert("Invalid move. \n" + activePlayer + ", play another move.");
            return;
        }
        const newBoard = moveSeeds(pos);
        setBoard(newBoard);
        visualize(newBoard);
        if (isGameOver()) {
            if (winner) {
                alert(winner + " has won the game!");
            } else {
                alert("The game has ended in a draw!");
            }
        }
        console.log(activePlayer + " has played.");
        setActivePlayer(activePlayer == p1 ? p2 : p1);
    }

    return (
        <>
            <Container>
                <Button onClick={() => play([0, 0])}>Play</Button>
                <Button onClick={() => play([0, 1])}>Play</Button>
                <Button onClick={() => play([0, 2])}>Play</Button>
                <Button onClick={() => play([0, 3])}>Play</Button>
                <Button onClick={() => play([0, 4])}>Play</Button>
                <Button onClick={() => play([0, 5])}>Play</Button>
                <Button onClick={() => play([1, 0])}>Play</Button>
                <Button onClick={() => play([1, 1])}>Play</Button>
                <Button onClick={() => play([1, 2])}>Play</Button>
                <Button onClick={() => play([1, 3])}>Play</Button>
                <Button onClick={() => play([1, 4])}>Play</Button>
                <Button onClick={() => play([1, 5])}>Play</Button>
            </Container>
        </>
    );
}
