import React from 'react'

export default function ForwardArrow({
  size = 18, // or any default size of your choice
  color="#000"  
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
     viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.47998 12.48H19.47" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.483 6.48779L19.52 12.4998L13.483 18.5118" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}