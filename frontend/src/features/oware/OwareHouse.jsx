import { ButtonBase } from "@mui/material";
import { useMemo } from "react";

function randomCoordinate(maxRadius, center, seedSize) {
    const r = Math.sqrt(Math.random()) * maxRadius;
    const theta = Math.random() * Math.PI * 2;
    const cx = center + r * Math.cos(theta);
    const cy = center + r * Math.sin(theta);

    const x = cx - seedSize / 2;
    const y = cy - seedSize / 2;

    return { x, y };
}

function overlaps(positions, pos, minDistance) {
    return positions.some((p) => {
        const dx = p.x - pos.x;
        const dy = p.y - pos.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        return d < minDistance;
    });
}

function generatePositions({
    count,
    pitSize,
    seedSize,
    minDistance,
    maxTries = 100,
}) {
    const positions = [];
    const maxRadius = pitSize / 2 - seedSize / 2 - 4;
    const center = pitSize / 2;

    for (let i = 0; i < count; i++) {
        let pos = null;

        for (let tries = 0; tries < maxTries; tries++) {
            const randomPos = randomCoordinate(maxRadius, center, seedSize);

            if (!overlaps(positions, randomPos, minDistance)) {
                pos = randomPos;
                break;
            }
        }

        positions.push(pos ?? randomCoordinate(maxRadius, center, seedSize));
    }

    return positions;
}

export default function OwareHouse({
    seeds,
    onClick,
    active,
    smallScreen = false,
}) {
    const pitSize = smallScreen ? 45 : 60;
    const seedSize = smallScreen ? 9 : 12;
    const minDistance = seedSize + 2;

    const activeColor = "#f5f5f5";
    const activeSeedColor = "saddlebrown";
    const activeSeedBorder = "#552200";

    const passiveColor = "#a3a3a3f5";
    const passiveSeedColor = "#767676f5";
    const passiveSeedBorder = "#464646ff";

    const positions = useMemo(
        () =>
            generatePositions({
                count: seeds,
                pitSize,
                seedSize,
                minDistance,
            }),
        [seeds, pitSize, seedSize, minDistance],
    );

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                width: pitSize,
                height: pitSize,
                borderRadius: "50%",
                border: "2px solid #333333ff",
                backgroundColor: active ? activeColor : passiveColor,
                position: "relative",
            }}
        >
            {positions.map((pos, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        left: pos.x,
                        top: pos.y,
                        width: seedSize,
                        height: seedSize,
                        borderRadius: "50%",
                        backgroundColor: active
                            ? activeSeedColor
                            : passiveSeedColor,
                        border:
                            "1px solid " +
                            (active ? activeSeedBorder : passiveSeedBorder),
                        boxShadow: "1px 1px 3px #00000066",
                    }}
                />
            ))}
        </ButtonBase>
    );
}
