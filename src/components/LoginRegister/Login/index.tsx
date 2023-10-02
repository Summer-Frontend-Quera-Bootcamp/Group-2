interface IFormLoginProps {
   TitleBox:string;
};
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ShareComponent/Button";
import ForwardArrow from "../../ShareComponent/Icons/ForwardArrow";

import Input from "../../ShareComponent/Input";

 const Login:React.FC<IFormLoginProps> = ({TitleBox}):JSX.Element  =>{
 
   return(
      <>
      <h1 className="font-bold text-center">{TitleBox}</h1>  
      <ForwardArrow></ForwardArrow>   
      <form>
      {/* Email input  */}
      <Input LabelName="ایمیل" LabelFor="UserEmail" InputType="text" />

      {/* Password input */}
      <Input LabelName="رمز عبور" LabelFor="UserPass" InputType="password" />

      {/* Forgot password link */}
      <div className="mb-6 flex items-center justify-between">            
         <Link to="" title="فراموشی رمز عبور" className="text-green-primary">رمزعبور را فراموش کرده ای ؟</Link>
      </div>

          {/* Login button  */}
          <div className="text-center lg:text-left">
            <Button  DspWidth="w-full" BtnValue="ورود" BtnColor="bg-green-primary" />

            {/* Register link */}
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              ثبت نام نکرده ای؟
              <a
                href="#!"
                className="text-green-primary transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ps-3"
                >ثبت نام</a
              >
            </p>
          </div>
        </form>
      </>
) }

export default Login;