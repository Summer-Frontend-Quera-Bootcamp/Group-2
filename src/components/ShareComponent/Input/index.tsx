
 import React, { useState } from "react";

interface IInputProps {
  LabelName?:string;
  InputName?:string;
  LabelFor:string;
  InputType:string;
  InputValue?:any;
  InputWidth?:string;
};
 type inputProps ={
  [x in string] :string;
 }
  const Input:React.FC<IInputProps> = ({
    LabelName,
    InputName,
    LabelFor,
    InputType,InputValue,
    InputWidth= "w-full"}):JSX.Element  =>{
      const [form,setForm]= useState<inputProps>({  });
      function HandelChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({...form,[e.target.name] : e.target.value});
        console.log(form)   
        //this.setAttribute("value",e.target.value)    
      }
      
    return(
        <div className="relative mb-6" data-te-input-wrapper-init>
        <label
            htmlFor={LabelFor}
            className={`mt-1 block ${InputWidth}`}>{LabelName}</label>
          <input
            type={InputType} name={InputName} onChange={HandelChange} 
            className={`peer block min-h-[auto] ${InputWidth} rounded border-slate-800 bg-transparent px-3 py-[0.32rem]`} id={LabelFor} />           
        </div>
    )
  }

  export default Input;