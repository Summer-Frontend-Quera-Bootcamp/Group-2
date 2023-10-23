
import React from "react"
import { useState } from "react";
import Button from "../../components/ShareComponent/Button";
import Input from "../../components/ShareComponent/Input";
import LayoutLogin from "../../components/ShareComponent/LayoutLogin";
type FormProps={
    ForgetPass:string;
}

const Forgetpassword:React.FC = () :JSX.Element =>{
    const [state,setstate]=useState<FormProps[]>([]);
    const [formValues, setFormValues] = useState<FormProps>({ ForgetPass: '' });
  
  
    const handleInputChange = (value: string, inputName: string) => {
      setFormValues(prevValues => ({
        ...prevValues,
        [inputName]: value
      }));
    };
  
    const HandelSubmitClick = () => {
      setstate([...state, formValues]);
      setFormValues({ ForgetPass: ''}); 
    };
    console.log(formValues);
return(
 <>
   
   <div className="flex justify-center">
    <div className="lg:w-[50%] md:w-[80%] card  md:mt-50 mt-10">
    
    
      <h1 className="font-bold text-center">بازیابی رمز عبور</h1>  
       
      <form>
      {/* enter your email address input  */}  
      <Input LabelName="ایمیل خود را وارد کنید" 
      LabelFor="YourEmail" 
      InputType="text"
       InputName="YourEmail"
        InputValue={formValues} onChange={handleInputChange} />
        <div className="text-center lg:text-left">
             <Button  DspWidth="w-full" BtnValue="دریافت ایمیل بازیابی رمز عبور" BtnColor="bg-green-primary"  onClick={HandelSubmitClick} />
        </div>

        {/* <p>لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.</p>

      <Input LabelName="رمز عبور جدید را وارد کنید" 
      LabelFor="ForgetPass" 
      InputType="text"
       InputName="ForgetPass"
        InputValue={formValues} onChange={handleInputChange} />
         <div className="text-center lg:text-left">
             <Button  DspWidth="w-full" BtnValue="تغییر رمز عبور" BtnColor="bg-green-primary"  onClick={HandelSubmitClick} />
           </div> */}
        </form>
   
        </div>
 </div>
    </>
  
)
}

export default Forgetpassword;