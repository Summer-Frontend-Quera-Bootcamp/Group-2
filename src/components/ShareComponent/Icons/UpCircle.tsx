import React from 'react'

export default function UpCircle({
  size = 18, // or any default size of your choice  
  color=strokeWidth
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none">
    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2"/>
    <path d="M15 13L12.2014 10.2014V10.2014C12.0901 10.0901 11.9099 10.0901 11.7986 10.2014V10.2014L9 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}