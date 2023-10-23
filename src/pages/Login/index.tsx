import React from "react"
import LayoutLogin from "../../components/ShareComponent/LayoutLogin";
import LoginForm from "./LoginForm";

const Login:React.FC = () :JSX.Element =>{
return(
   
    <div className="flex justify-center">
    <div className="lg:w-[50%] md:w-[80%] card  md:mt-50 mt-10">
    <LoginForm TitleBox="به کوئرا تسک منیجر خوش برگشتی :)"/>
    
    </div>
 </div>
   
  
)
}

export default Login;