interface IFormRegisterProps {
    TitleBox:string;
 };
 import React, { useState } from "react";
 import {  Link } from "react-router-dom";
import Button from "../../../components/ShareComponent/Button";
import Checkbox from "../../../components/ShareComponent/Checkbox";
import Input from "../../../components/ShareComponent/Input";
type FormProps = {
    UserName: string;
    UserEmail: string;
    UserPass: string;
  };
  const RegisterFrom:React.FC<IFormRegisterProps> = ({TitleBox}):JSX.Element  =>{
  
    const [state,setstate]=useState<FormProps[]>([]);
    const [formValues, setFormValues] = useState<FormProps>({ UserName: '', UserEmail: '',UserPass:'' });
  
  
    const handleInputChange = (value: string, inputName: string) => {
      setFormValues(prevValues => ({
        ...prevValues,
        [inputName]: value
      }));
    };
  
    
  
    const HandelSubmitClick = () => {
      setstate([...state, formValues]);
      setFormValues({ UserName: '', UserEmail: '' ,UserPass:''}); 
    };
    console.log(formValues);
    return(
       <>
       <h1 className="font-bold text-center">{TitleBox}</h1>
       <form>
         {/* UserName input  */}
       <Input   LabelName="نام کامل" LabelFor="UserName" InputType="text"
       InputValue={formValues} onChange={handleInputChange} />
 
       {/* Email input  */}
       <Input   LabelName="ایمیل" LabelFor="UserEmail" InputType="text" 
       InputValue={formValues} onChange={handleInputChange}/>
 
       {/* Password input */}
       <Input   LabelName="رمز عبور" LabelFor="UserPass" InputType="password"
        InputValue={formValues} onChange={handleInputChange} />
 
       {/* Accept Rules? */}
       <Checkbox LabelFor="Rules" LabelName="قوانین و مقررات را می‌پذیرم."/>   
 
           {/* Login button  */}
           <div className="text-center lg:text-left">
             <Button  DspWidth="w-full" BtnValue="ثبت نام" BtnColor="bg-green-primary"  onClick={HandelSubmitClick} />
           </div>
         </form>
       </>
 ) }
 
 export default RegisterFrom;