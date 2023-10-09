import React from "react";

export default function ArrowRight({
    size = 18, // or any default size of your choice
}) {
    return (
        <svg
            width={size} // added size here
            height={size} // added size here
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 16.5L14 12.5L10 8.5"
                stroke="#7D828C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
