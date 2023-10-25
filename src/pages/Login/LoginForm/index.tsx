
// import React, { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import Button from "../../../components/ShareComponent/Button";
// import Input from "../../../components/ShareComponent/Input";

// interface IFormLoginProps {
//   TitleBox:string;
// };
// type FormProps = {
//   email: string;
//   password: string;
// };

//  const LoginForm:React.FC<IFormLoginProps> = ({TitleBox}):JSX.Element  =>{

//   const [state,setstate]=useState<FormProps[]>([]);
//   const [formValues, setFormValues] = useState<FormProps>({ email: '', password: '' });


//   const handleInputChange = (value: string, inputName: string) => {
//     setFormValues(prevValues => ({
//       ...prevValues,
//       [inputName]: value
//     }));
    
//   };

//   const navigate = useNavigate();

//   const HandelSubmitClick = () => {  
   
//     setFormValues({ email: '', password: '' }); 
//     setstate([...state, formValues]);
//     console.log(formValues);
//     navigate('/Boardview', {replace: true});
    
//   };


//    return(
//       <>
//       <h1 className="font-bold text-center">{TitleBox}</h1>  
       
//       <form>
//       {/* Email input  */}    
    
//       <Input LabelName="ایمیل" 
//       LabelFor="UserEmail" 
//       InputType="text"
//        InputName="email"
//         InputValue={formValues} onChange={handleInputChange} />


//       {/* Password input */}
//       <Input LabelName="رمز عبور" LabelFor="UserPass" InputType="password" 
//       InputName="password" InputValue={formValues} onChange={handleInputChange} />

    
//       {/* Forgot password link */}
//       <div className="mb-6 flex items-center justify-between">            
//          <Link to="/Forgetpassword" title="فراموشی رمز عبور" className="text-green-primary">رمزعبور را فراموش کرده ای ؟</Link>
//       </div>

//           {/* Login button  */}
//           <div className="text-center lg:text-left">
//             <Button  DspWidth="w-full" 
//               BtnValue="ورود"
//               BtnColor="bg-green-primary" 
//               onClick={HandelSubmitClick}/>

//             {/* Register link */}
//             <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
//               ثبت نام نکرده ای؟
//               <a
//                 href="/RegisterPage" title="ثبت نام"
//                 className="text-green-primary transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ps-3"
//                 >ثبت نام</a>
//             </p>
//           </div>
//         </form>
//       </>
// ) }

// export default LoginForm;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../../components/ShareComponent/Button";
import Input from "../../../components/ShareComponent/Input";

interface IFormLoginProps {
  TitleBox: string;
}

type FormProps = {
  email: string;
  password: string;
};

const LoginForm: React.FC<IFormLoginProps> = ({ TitleBox }): JSX.Element => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormProps>({ email: '', password: '' });

  const handleInputChange = (value: string, inputName: string) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [inputName]: value
    }));
  };

  const HandelSubmitClick = async () => { 
    console.log(formValues)
    // try {
    //   // ارسال درخواست به سمت سرور
    //   const response = await axios.post("/accounts/login", formValues);

    //   // اگر درخواست موفقیت‌آمیز بود
    //   if (response.data.success) {
    //     // رفتن به صفحه Boardview
    //     navigate('/Boardview', {replace: true});
    //   } else {
    //     // در صورت عدم موفقیت نمایش پیام خطا یا انجام عملیات دیگر
    //     console.log(response.data.message);
    //   }
    // } catch (error) {
    //   // در صورت بروز خطا در ارتباط با سرور
    //   console.error("خطا در ارتباط با سرور", error);
    // }
  };

  return (
    <>
      <h1 className="font-bold text-center">{TitleBox}</h1>

      <form>
        {/* Email input */}
        <Input LabelName="ایمیل" LabelFor="UserEmail" InputType="text" InputName="email" InputValue={formValues.email} onChange={handleInputChange} />

        {/* Password input */}
        <Input LabelName="رمز عبور" LabelFor="UserPass" InputType="password" InputName="password" InputValue={formValues.password} onChange={handleInputChange} />

        {/* Forgot password link */}
        <div className="mb-6 flex items-center justify-between">
          <Link to="/Forgetpassword" title="فراموشی رمز عبور" className="text-green-primary">رمزعبور را فراموش کرده ای ؟</Link>
        </div>

        {/* Login button */}
        <div className="text-center lg:text-left">
          <Button DspWidth="w-full" BtnValue="ورود" BtnColor="bg-green-primary" onClick={HandelSubmitClick} />

          {/* Register link */}
          <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
            ثبت نام نکرده ای؟
            <Link to="/RegisterPage" title="ثبت نام" className="text-green-primary transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ps-3">ثبت نام</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
