import React from 'react'

export default function AlignRight({
  size = 18, // or any default size of your choice
  color= "#000" // or any color of your choice
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size} // added size here
      height={size} // added size here
      fill={color} // added color here
    >
      <path d="M8 10H21M3 14H21M8 18H21M3 6H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
  )
}