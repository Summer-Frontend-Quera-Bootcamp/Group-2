import React from 'react'

export default function DownSquare({
  size = 18, // or any default size of your choice  
  color="#000"
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke={color} stroke-width="2"/>
    <path d="M9 11L11.6002 13.6002V13.6002C11.821 13.821 12.179 13.821 12.3998 13.6002V13.6002L15 11" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}