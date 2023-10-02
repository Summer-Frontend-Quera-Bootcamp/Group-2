import React from 'react'

export default function Layout({
  size = 18, // or any default size of your choice  
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21V9.06" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9.06H11C9.89543 9.06 9 9.95543 9 11.06V21" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 15.06H9" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}