import React from 'react'

export default function UpSquare({
  size = 18, // or any default size of your choice 
  color='black' 
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke={color} strokeWidth="2"/>
<path d="M15 13L12.2014 10.2014V10.2014C12.0901 10.0901 11.9099 10.0901 11.7986 10.2014V10.2014L9 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}