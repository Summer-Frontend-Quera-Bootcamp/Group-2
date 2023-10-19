import React from 'react'

export default function Plus({
  size = 18, // or any default size of your choice  
  color="#000"
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none">
<path d="M6 12H18M12 6V18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}