import React from "react"
import Header from "../Header"
import Login from "./Login";
import "./style.css";
const LoginRegister:React.FC = () :JSX.Element =>{
return(
    <div className="backColor h-screen">
     <div className="container mx-auto relative h-screen ">
        <Header/>
        <div className="row justify-center">
            <div className="lg:w-[50%] md:w-[80%] card  md:mt-50 mt-10">
            <Login TitleBox="به کوئرا تسک منیجر خوش برگشتی :)"/>
            </div>
         </div>
     </div> 

     
     </div>
)
}

export default LoginRegister;