import React from "react"
import RegisterFrom from "./RegisterForm";

const RegisterPage:React.FC = () :JSX.Element =>{
return(
   
   <div className="flex justify-center">
   <div className="lg:w-[50%] md:w-[80%] card  md:mt-50 mt-10">
  <RegisterFrom TitleBox="ثبت‌نام در کوئرا تسک منیجر"/>
   </div>
   </div>

)
}

export default RegisterPage;