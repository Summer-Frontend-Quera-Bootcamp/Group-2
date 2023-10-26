import React from 'react'

export default function AttachLink({
    size = 18, // or any default size of your choice
    color = "black" // or any color of your choice
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill='none'>
            <path d="M9.99915 13.0006L10.9525 13.954C11.703 14.7045 12.7209 15.1262 13.7822 15.1262C14.8436 15.1262 15.8614 14.7045 16.6119 13.954L19.6442 10.9218C21.4571 9.10864 21.4571 6.16918 19.6442 4.35604V4.35604C17.831 2.5431 14.8916 2.5431 13.0784 4.35604L12.1911 5.24441" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.0008 9.99931L13.0474 9.04591C12.297 8.29541 11.2791 7.87378 10.2177 7.87378C9.15639 7.87378 8.13852 8.29541 7.38806 9.04591L4.35579 12.0782C2.54286 13.8913 2.54286 16.8308 4.35579 18.6439V18.6439C6.16893 20.4568 9.10839 20.4568 10.9215 18.6439L11.8089 17.7555" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}