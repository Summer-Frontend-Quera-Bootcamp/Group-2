import React from 'react'

export default function MinusSquare({
  size = 18, // or any default size of your choice  
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none">
    <path d="M9 12H15" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#000" stroke-width="2"/>
    </svg>
  )
}