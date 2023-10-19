import React from "react"
import LayoutLogin from "../../components/ShareComponent/LayoutLogin";
import LoginForm from "./LoginForm";

const Login:React.FC = () :JSX.Element =>{
return(
   <LayoutLogin>
       <LoginForm TitleBox="به کوئرا تسک منیجر خوش برگشتی :)"/>
   </LayoutLogin>
  
)
}

export default Login;