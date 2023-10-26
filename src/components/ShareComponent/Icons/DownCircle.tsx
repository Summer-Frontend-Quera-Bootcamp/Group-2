import React from 'react'

export default function DownCircle({
  size = 18, // or any default size of your choice  
  color='black'
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2"/>
<path d="M9 11L11.6002 13.6002V13.6002C11.821 13.821 12.179 13.821 12.3998 13.6002V13.6002L15 11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}