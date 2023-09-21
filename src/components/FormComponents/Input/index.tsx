interface IInputProps {
    LabelName?:string;
    LabelFor:string;
    InputType:string;
    InputValue?:any;
    InputWidth?:string;
 };
 import React from "react";

  const Input:React.FC<IInputProps> = ({LabelName,LabelFor,InputType,InputValue,InputWidth= "w-full"}):JSX.Element  =>{
    return(
        <div className="relative mb-6" data-te-input-wrapper-init>
        <label
            htmlFor={LabelFor}
            className={`mt-1 block ${InputWidth}`}>{LabelName}</label>
          <input
            type={InputType}
            className={`peer block min-h-[auto] ${InputWidth} rounded border-slate-800 bg-transparent px-3 py-[0.32rem]`} id={LabelFor} value={InputValue}/>           
        </div>
    )
  }

  export default Input;