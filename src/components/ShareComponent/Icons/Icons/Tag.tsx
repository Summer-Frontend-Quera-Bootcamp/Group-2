import React from 'react'

export default function Tag({
  size = 18, // or any default size of your choice
  color="#000"  
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
     viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.63707 8.45456C7.75651 8.574 7.75651 8.76764 7.63707 8.88707C7.51764 9.00651 7.324 9.00651 7.20456 8.88707C7.08513 8.76764 7.08513 8.574 7.20456 8.45456C7.324 8.33513 7.51764 8.33513 7.63707 8.45456" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.75833 5.24167L15.7667 11.25C16.41 11.8933 16.41 12.9367 15.7667 13.58L12.33 17.0167C11.6867 17.66 10.6433 17.66 10 17.0167L3.99167 11.0083C3.8375 10.8542 3.75 10.6442 3.75 10.4258V5.82417C3.75 5.36917 4.11917 5 4.57417 5H9.17667C9.395 5 9.60417 5.08667 9.75833 5.24167V5.24167Z" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 8.33333L10.8283 2.98083C10.5158 2.6725 10.0958 2.5 9.6575 2.5H6.25" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}