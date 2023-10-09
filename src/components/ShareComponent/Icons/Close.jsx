import React from "react";

export default function Colse({
    size = 18, // or any default size of your choice
}) {
    return (
        <svg
            width={size} // added size here
            height={size} // added size here
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 8L16 16"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16 8L8 16"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
