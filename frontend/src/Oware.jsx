import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import OwareHouse from "./OwareHouse";
import { IconButton, Link } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import InfoDialog from "./InfoDialog";

function initBoard() {
    return [
        Array(6)
            .fill()
            .map(() => ({ seeds: 4, valid: true })),
        Array(6)
            .fill()
            .map(() => ({ seeds: 4, valid: false })),
    ];
}

function reshape(flatBoard) {
    return [flatBoard.slice(0, 6), flatBoard.slice(6, 12)];
}

function hasValidMoves(board, player) {
    return board[player].some((x) => x.valid);
}

function validateMove(side, place, board, player) {
    const opponent = 1 - player;
    if (side !== player) return false;
    if (board[side][place].seeds === 0) return false;
    if (board[opponent].every((x) => x.seeds === 0)) {
        if (board[side][place].seeds < board[side].length - place) return false;
    }
    return true;
}

function updateValidMoves(board, player) {
    return board.map((side, s_i) => {
        side.map((cell, x_i) => ({
            ...cell,
            valid: validateMove(s_i, x_i, board, player),
        }));
    });
}

function eat(flatBoard, side, pos, eaten = 0) {
    if (
        flatBoard[pos].seeds >= 2 &&
        flatBoard[pos].seeds <= 3 &&
        Math.floor(pos / (flatBoard.length / 2)) !== side
    ) {
        eaten += flatBoard[pos].seeds;
        flatBoard[pos].seeds = 0;
        const nextPos = (pos - 1 + flatBoard.length) % flatBoard.length;
        return eat(flatBoard, side, nextPos, eaten);
    }
    return [flatBoard, eaten];
}

function moveSeeds(side, place, board, scores, player) {
    let flatBoard = board.flat();
    const pos = side * 6 + place;
    const seeds = flatBoard[pos].seeds;
    flatBoard[pos].seeds = 0;

    let currentPos = pos;
    let currentSeeds = seeds;
    while (currentSeeds > 0) {
        currentPos = (currentPos + 1) % flatBoard.length;
        if (currentPos !== pos) {
            flatBoard[currentPos].seeds++;
            currentSeeds--;
        }
    }

    const [newFlatBoard, eaten] = eat(
        flatBoard,
        side,
        (pos + seeds) % flatBoard.length
    );
    const newScores = [...scores];
    newScores[player] += eaten;

    return [newScores, reshape(newFlatBoard)];
}

function gameOverCheck(scores, board, nextPlayer, players) {
    const maxScore = Math.max(...scores);
    if (scores[0] === 24 && scores[1] === 24) return "draw";
    if (maxScore > 24 || !hasValidMoves(board, nextPlayer)) {
        if (scores[0] === scores[1]) return "draw";
        return scores[0] > scores[1] ? players[0] : players[1];
    }
    return null;
}

export default function Oware({ p1 = "Player 1", p2 = "Player 2" }) {
    const [info, setInfo] = useState(false);
    const [board, setBoard] = useState(initBoard);
    const [activePlayer, setActivePlayer] = useState(0);
    const [scores, setScores] = useState([0, 0]);
    const [winner, setWinner] = useState(null);

    const players = [p1, p2];

    function handleRestart() {
        setBoard(initBoard());
        setScores([0, 0]);
        setActivePlayer(0);
        setWinner(null);
    }

    function play([side, place]) {
        if (winner) {
            alert("The game is over. \n No more moves can be made.");
            return;
        }
        if (!board[side][place].valid) {
            alert("Invalid move. \n" + activePlayer + ", play another move.");
            return;
        }

        const [newScores, newBoard] = moveSeeds(
            side,
            place,
            board,
            scores,
            activePlayer
        );
        const nextPlayer = 1 - activePlayer;
        const updatedBoard = updateValidMoves(newBoard, nextPlayer);

        setScores(newScores);
        setBoard(updatedBoard);
        setActivePlayer(nextPlayer);

        const result = gameOverCheck(newScores, newBoard, nextPlayer, players);
        if (result) setWinner(result);
    }

    return (
        <>
            <IconButton
                size="large"
                color="primary"
                sx={{ position: "absolute", top: 0, right: 0 }}
                onClick={() => setInfo(true)}
            >
                <InfoIcon />
            </IconButton>

            <InfoDialog
                open={info}
                title="Oware"
                handleClose={() => setInfo(false)}
            >
                Information about the game, including the rules, can be found on{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Oware"
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Wikipedia
                </Link>
                .
            </InfoDialog>

            <Stack spacing={4} alignItems="center">
                <PlayerPanel
                    name={p2}
                    score={scores[1]}
                    active={activePlayer === 1}
                />

                <Stack direction="row" spacing={1}>
                    {[...Array(6)].map((_, i) => (
                        <OwareHouse
                            key={"1_" + (5 - i)}
                            seeds={board[1][5 - i].seeds}
                            active={board[1][5 - i].valid}
                            onClick={() => play([1, 5 - i])}
                        />
                    ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                    {[...Array(6)].map((_, i) => (
                        <OwareHouse
                            key={"0_" + i}
                            seeds={board[0][i].seeds}
                            active={board[0][i].valid}
                            onClick={() => play([0, i])}
                        />
                    ))}
                </Stack>

                <PlayerPanel
                    name={p1}
                    score={scores[0]}
                    active={activePlayer === 0}
                />

                <Button
                    variant="contained"
                    sx={{ bgcolor: "primary.dark" }}
                    onClick={handleRestart}
                >
                    Restart
                </Button>
            </Stack>

            <InfoDialog
                title={
                    winner === "draw" ? "It's a draw!" : winner + " wins! 🎉"
                }
                open={winner}
                handleClose={handleRestart}
            >
                Close this window to restart.
            </InfoDialog>
        </>
    );
}

function PlayerPanel({ name, score, active }) {
    return (
        <Stack
            alignItems="center"
            sx={{
                p: 1,
                borderRadius: "15%",
                bgcolor: active ? "primary.light" : undefined,
                color: active ? "primary.contrastText" : "default",
            }}
        >
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h5">{score}</Typography>
        </Stack>
    );
}
