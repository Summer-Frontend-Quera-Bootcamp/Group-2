interface IFormRegisterProps {
   TitleBox:string;
};
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ShareComponent/Button";
import Checkbox from "../../ShareComponent/Checkbox";

import Input from "../../ShareComponent/Input";

 const Register:React.FC<IFormRegisterProps> = ({TitleBox}):JSX.Element  =>{
 
   return(
      <>
      <h1 className="font-bold text-center">{TitleBox}</h1>
      <form>
        {/* UserName input  */}
      <Input   LabelName="نام کامل" LabelFor="UserName" InputType="text" />

      {/* Email input  */}
      <Input   LabelName="ایمیل" LabelFor="UserEmail" InputType="text" />

      {/* Password input */}
      <Input   LabelName="رمز عبور" LabelFor="UserPass" InputType="password" />

      {/* Accept Rules? */}
      <Checkbox LabelFor="Rules" LabelName="قوانین و مقررات را می‌پذیرم."/>   

          {/* Login button  */}
          <div className="text-center lg:text-left">
            <Button  DspWidth="w-full" BtnValue="ثبت نام" BtnColor="bg-green-primary" />
          </div>
        </form>
      </>
) }

export default Register;