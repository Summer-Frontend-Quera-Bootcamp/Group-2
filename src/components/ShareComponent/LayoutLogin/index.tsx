import React, { Children } from "react"
import Header from "../../Header";

interface LayoutLoginProps{
children: React.ReactNode
}
const LayoutLogin:React.FC<LayoutLoginProps> = ({children}):JSX.Element  =>{
return(
    <div className="backColor h-screen">
     <div className="container mx-auto relative h-screen ">
        <Header/>
        <div className="flex justify-center">
            <div className="lg:w-[50%] md:w-[80%] card  md:mt-50 mt-10">
            {children}
            </div>
         </div>
     </div> 

     
     </div>
)
}

export default LayoutLogin;