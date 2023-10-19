import React from 'react'

export default function StartDayCalender({
  size = 18, // or any default size of your choice  
  color=strokeWidth
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
     viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
 <path d="M8 2V5" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 2V5" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/> <path d="M3.5 9.08997H20.5" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/> <path d="M11.9955 13.7H12.0045" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8.29431 13.7H8.30329" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8.29431 16.7H8.30329" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 

 </svg>
  )
}