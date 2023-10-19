import React from 'react'

export default function Smile({
  size = 18, // or any default size of your choice  
  color="#000"
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.328 9.5C15.19 9.5 15.078 9.612 15.079 9.75C15.079 9.888 15.191 10 15.329 10C15.467 10 15.579 9.888 15.579 9.75C15.579 9.612 15.467 9.5 15.328 9.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.63902 9.5C8.50102 9.5 8.38902 9.612 8.39002 9.75C8.39002 9.888 8.50202 10 8.64002 10C8.77802 10 8.89002 9.888 8.89002 9.75C8.89002 9.612 8.77802 9.5 8.63902 9.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    

  )
}