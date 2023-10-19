import React from 'react'

export default function Colse({
  size = 18, // or any default size of your choice  
  color=strokeWidth
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8L16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8L8 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}