import React from "react";

export default function TagColor({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}): React.JSX.Element {
  return (
    <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
    >
      <rect width="20" height="20" rx="8" fill={color} className={'bg-'+color}/>
    </svg>
    </button>
  );
}
