import React from "react"
import LayoutLogin from "../../components/ShareComponent/LayoutLogin";
import RegisterFrom from "./RegisterForm";

const RegisterPage:React.FC = () :JSX.Element =>{
return(
   <LayoutLogin>
  <RegisterFrom TitleBox="ثبت‌نام در کوئرا تسک منیجر"/>
   </LayoutLogin>

)
}

export default RegisterPage;