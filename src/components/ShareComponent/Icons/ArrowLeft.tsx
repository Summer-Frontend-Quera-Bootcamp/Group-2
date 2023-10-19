import React from 'react'

export default function ArrowLeft({
  size = 18, // or any default size of your choice  
  color= "#000"
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8.5L10 12.5L14 16.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  )
}