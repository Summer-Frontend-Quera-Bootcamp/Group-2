import React, { Children } from "react"
import { Outlet } from "react-router-dom";
import Header from "../../Header";

interface LayoutLoginProps{children?: React.ReactNode
}
const LayoutLogin:React.FC<LayoutLoginProps> = ({children}):JSX.Element  =>{
return(
    <>
    <div className="backColor h-screen">
     <div className="container mx-auto relative h-screen ">
        <Header/>
        <Outlet/>
     </div>      
     </div>
     
     </>
)
}

export default LayoutLogin;