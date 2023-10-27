import React from 'react'

export default function CheckSquare({
  size = 18, // or any default size of your choice  
  color="#000"
}) {
  return (
  
<svg width={size} height={size} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1372 7.24158L7.46784 9.90935L5.86304 8.30936" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="1.9978" y="2.4978" width="12.005" height="12.005" rx="3.33333" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}