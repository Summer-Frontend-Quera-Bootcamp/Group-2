
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ShareComponent/Button";
import Input from "../../ShareComponent/Input";

interface IFormLoginProps {
  TitleBox:string;
};
type FormProps ={
  email?:string;
  password?:string
}

 const Login:React.FC<IFormLoginProps> = ({TitleBox}):JSX.Element  =>{

  const [state,setstate]=useState<FormProps[]>([]);
  const [form,setform]=useState<FormProps>({});

  const HandelChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setform ({...form,[e.target.name]:e.target.value})
  }

  const HandelClick =() =>{
    setstate ([...state,form]);
    setform({})
  }
 console.log(form)
   return(
      <>
      <h1 className="font-bold text-center">{TitleBox}</h1>  
       
      <form>
      {/* Email input  */}
      <div className="relative mb-6" data-te-input-wrapper-init>
        <label
          lable-for="email"
            className={`mt-1 block`}>ایمیل</label>
          <input
            type="text" name="email" onChange={HandelChange} value={form.email || ""}
            className={`peer block min-h-[auto] w-full rounded border-slate-800 bg-transparent px-3 py-[0.32rem]`} id="email" />           
        </div>
      {/* <Input LabelName="ایمیل" LabelFor="UserEmail" InputType="text" InputName="email" /> */}

      {/* Password input */}
      {/* <Input LabelName="رمز عبور" LabelFor="UserPass" InputType="password" InputName="password"/> */}
      <label
          lable-for="password"
            className={`mt-1 block`}>رمز عبور</label>
          <input
            type="text" name="password" onChange={HandelChange} value={form.password || ""}
            className={`peer block min-h-[auto] w-full rounded border-slate-800 bg-transparent px-3 py-[0.32rem]`} id="password" />           
       
      {/* Forgot password link */}
      <div className="mb-6 flex items-center justify-between">            
         <Link to="" title="فراموشی رمز عبور" className="text-green-primary">رمزعبور را فراموش کرده ای ؟</Link>
      </div>

          {/* Login button  */}
          <div className="text-center lg:text-left">
            {/* <Button  DspWidth="w-full" BtnValue="ورود" BtnColor="bg-green-primary" Handeling={HandelClick}/> */}
            <button className="w-full bg-green-primary rounded block px-6 pb-2 pt-2.5 text-white shadow-[0_0px_6px_-4px_#161f1a63] transition duration-800ms ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none`}" onClick={HandelClick}>ورود </button>
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