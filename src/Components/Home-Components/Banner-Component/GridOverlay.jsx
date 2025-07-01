// GridOverlay.jsx
import React from "react";

const GridOverlay = () => {
    const rows = 12;
    const cols = 12;
    const total = rows * cols;

    return (
        <div className="absolute inset-0 grid grid-cols-6 lg:grid-cols-12 grid-rows-12 z-0">
            {[...Array(total)].map((_, i) => (
                <div
                    key={i}
                    className="border border-white/10 hover:border-white/40 transition-all duration-300 hover:bg-white/10"
                />
            ))}
        </div>
    );



};

export default GridOverlay;
