import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Ouril({ p1 = "Player 1", p2 = "Player 2" }) {
    // TODO: remove console.log()

    const initBoard = [
        [4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4],
    ];

    const [board, setBoard] = useState(initBoard);

    const [activePlayer, setActivePlayer] = useState(p1);
    const [scores, setScores] = useState([0, 0]);
    const [winner, setWinner] = useState();

    function handleRestart() {
        setBoard(initBoard);
        setScores([0, 0]);
        setActivePlayer(p1);
        setWinner(undefined);
    }

    function gameOverCheck(scores, board, nextPlayer) {
        let hasWinner = false;
        let winner = undefined;
        const maxScore = Math.max(...scores);
        if (scores[0] == 24 && scores[1] == 24) {
            winner = "draw";
        } else if (maxScore > 24) {
            hasWinner = true;
        } else if (
            !hasValidMoves(nextPlayer == p1 ? 0 : 1, board, nextPlayer)
        ) {
            hasWinner = true;
        }
        if (hasWinner) {
            const winnerIndex = scores.findIndex((x) => x == maxScore);
            winner = winnerIndex == 0 ? p1 : p2;
        }
        return winner;
    }

    function hasValidMoves(side, board, player) {
        return board[side].some((_, i) =>
            validateMove([side, i], board, player)
        );
    }

    function validateMove([side, place], board, activePlayer) {
        const playerSide = activePlayer == p1 ? 0 : 1;
        const opponentSide = 1 - playerSide;
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

    function moveSeeds([side, place], board) {
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
            side,
            (pos + numberOfSeeds) % flatBoard.length
        );
        const newScores =
            activePlayer == p1
                ? [scores[0] + eaten, scores[1]]
                : [scores[0], scores[1] + eaten];
        return [newScores, reshape(newFlatBoard)];
    }

    function eat(flatBoard, side, pos, eaten = 0) {
        if (
            flatBoard[pos] >= 2 &&
            flatBoard[pos] <= 3 &&
            Math.floor(pos / (flatBoard.length / 2)) != side
        ) {
            eaten += flatBoard[pos];
            flatBoard[pos] = 0;
            const nextPos = (pos - 1 + flatBoard.length) % flatBoard.length;
            return eat(flatBoard, side, nextPos, eaten);
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
        if (winner) {
            alert("The game is over. \n No more moves can be made.");
            return;
        }
        const moveIsValid = validateMove(pos, board, activePlayer);
        if (!moveIsValid) {
            alert("Invalid move. \n" + activePlayer + ", play another move.");
            return;
        }
        const [newScores, newBoard] = moveSeeds(pos, board);
        setScores(newScores);
        setBoard(newBoard);
        visualize(newBoard);
        console.log(activePlayer + " has played.");
        const nextPlayer = activePlayer == p1 ? p2 : p1;
        setActivePlayer(nextPlayer);
        const newWinner = gameOverCheck(newScores, newBoard, nextPlayer);
        if (newWinner) setWinner(newWinner);
    }

    return (
        <>
            <Stack alignItems="center" justifyContent="start" padding={6}>
                <Typography variant="h6">{p1}</Typography>
                <Typography variant="h5">{scores[0]}</Typography>
            </Stack>
            <Stack spacing={4} alignItems="center">
                <Typography variant="body1">
                    {winner &&
                        (winner == "draw"
                            ? "The game finished as a draw!"
                            : winner + " has won the game!")}
                    {!winner && `It's ${activePlayer}'s turn.`}
                </Typography>
                <Stack direction="row" spacing={1}>
                    {[...Array(6)].map((_, i) => (
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor:
                                    activePlayer == p1
                                        ? "grey"
                                        : "primary.main",
                            }}
                            onClick={() => play([1, 5 - i])}
                        >
                            {board[1][5 - i]}
                        </Button>
                    ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                    {[...Array(6)].map((_, i) => (
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor:
                                    activePlayer == p2
                                        ? "grey"
                                        : "primary.main",
                            }}
                            onClick={() => play([0, i])}
                        >
                            {board[0][i]}
                        </Button>
                    ))}
                </Stack>
                <Button
                    variant="contained"
                    sx={{ bgcolor: "primary.dark" }}
                    onClick={handleRestart}
                >
                    Restart
                </Button>
            </Stack>
            <Stack alignItems="center" justifyContent="start" padding={6}>
                <Typography variant="h6">{p2}</Typography>
                <Typography variant="h5">{scores[1]}</Typography>
            </Stack>
        </>
    );
}
