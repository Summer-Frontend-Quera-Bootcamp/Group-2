import React from 'react'

export default function Search({
  size = 18, // or any default size of your choice 
  color='black' 
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.0586" cy="11.5587" r="7.06194" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0033 20.5034L16.0517 16.5518" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}