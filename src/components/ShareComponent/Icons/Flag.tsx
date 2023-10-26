import React from 'react'

export default function Flag({
  size = 18, // or any default size of your choice  
  color = 'black'
}) {
  return (
    <svg 
    width={size} // added size here
    height={size} // added size here
    viewBox="0 0 24 24" fill="none">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V3.08515L7.32358 2.77043C9.11678 2.41179 10.9756 2.58245 12.6735 3.26161L13.0868 3.42693C14.3652 3.93832 15.7724 4.03382 17.1082 3.69986C18.3875 3.38005 19.4147 4.76652 18.7363 5.89719L17.4578 8.02808C17.0814 8.65542 17.021 8.78483 17.0056 8.90275C16.9972 8.96731 16.9972 9.03269 17.0056 9.09725C17.021 9.21517 17.0814 9.34458 17.4578 9.97192L19.0184 12.573C19.5884 13.5229 19.0787 14.7534 18.004 15.0221L17.9039 15.0471C15.9814 15.5277 13.9563 15.3903 12.1164 14.6543C10.6886 14.0832 9.12562 13.9397 7.61776 14.2413L5.75 14.6149V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V2C4.25 1.58579 4.58579 1.25 5 1.25ZM5.75 13.0851L7.32358 12.7704C9.11678 12.4118 10.9756 12.5825 12.6735 13.2616C14.2206 13.8805 15.9235 13.996 17.5401 13.5919L17.6402 13.5669C17.7377 13.5425 17.7839 13.4309 17.7322 13.3447L16.1716 10.7437C16.1517 10.7106 16.132 10.6779 16.1125 10.6455C15.8295 10.1756 15.5796 9.76055 15.5183 9.29176C15.493 9.09808 15.493 8.90192 15.5183 8.70824C15.5796 8.23946 15.8295 7.82441 16.1125 7.35454C16.132 7.32208 16.1517 7.28936 16.1716 7.25634L17.4254 5.16658C15.7976 5.56324 14.0861 5.4422 12.5297 4.81964L12.1164 4.65433C10.6886 4.08323 9.12562 3.93973 7.61776 4.2413L5.75 4.61485V13.0851Z" fill={color}/> </g>

</svg>
  )
}