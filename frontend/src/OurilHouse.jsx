import React from "react";
import { ButtonBase } from "@mui/material";

// TODO: refactor this component
// TODO: grey out the house when not on turn

function generatePositions({
    count,
    pitSize,
    seedSize,
    minDistance,
    maxTries = 100,
}) {
    const positions = [];
    const maxRadius = pitSize / 2 - seedSize / 2 - 4; // center radius available
    const center = pitSize / 2;

    for (let i = 0; i < count; i++) {
        let pos = null;
        let tries = 0;

        // Try to find a non-overlapping candidate (polar sampling for uniform distribution)
        while (tries < maxTries) {
            tries++;
            const r = Math.sqrt(Math.random()) * maxRadius;
            const theta = Math.random() * Math.PI * 2;
            const cx = center + r * Math.cos(theta);
            const cy = center + r * Math.sin(theta);

            const x = cx - seedSize / 2;
            const y = cy - seedSize / 2;

            const overlaps = positions.some((p) => {
                const dx = p.x - x;
                const dy = p.y - y;
                const d = Math.sqrt(dx * dx + dy * dy);
                return d < minDistance;
            });

            if (!overlaps) {
                pos = { x, y };
                break;
            }
        }

        // Fallback: if no non-overlapping spot found, place one anyway (still inside circle)
        if (!pos) {
            const r = Math.sqrt(Math.random()) * maxRadius;
            const theta = Math.random() * Math.PI * 2;
            const cx = center + r * Math.cos(theta);
            const cy = center + r * Math.sin(theta);

            pos = { x: cx - seedSize / 2, y: cy - seedSize / 2 };
        }

        positions.push(pos);
    }

    return positions;
}

export default function OurilHouse({ seeds, onClick }) {
    const pitSize = 60;
    const seedSize = 12;
    const minDistance = seedSize + 2; // required distance between seeds

    const positions = React.useMemo(
        () =>
            generatePositions({
                count: seeds,
                pitSize,
                seedSize,
                minDistance,
            }),
        [seeds, pitSize, seedSize, minDistance]
    );

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                width: pitSize,
                height: pitSize,
                borderRadius: "50%",
                border: "2px solid #333",
                backgroundColor: "#f5f5f5",
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
                        backgroundColor: "saddlebrown",
                        border: "1px solid #552200",
                        boxShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                    }}
                />
            ))}
        </ButtonBase>
    );
}
