interface IInputProps {
    LabelName:string;
    LabelFor:string;
    InputType:string;
 };
 import React from "react";
 
  const Input:React.FC<IInputProps> = ({LabelName,LabelFor,InputType}):JSX.Element  =>{
    return(
        <div className="relative mb-6" data-te-input-wrapper-init>
        <label
            htmlFor={LabelFor}
            className="mt-1 block w-full">{LabelName}</label>
          <input
            type={InputType}
            className="peer block min-h-[auto] w-full rounded border-slate-800 bg-transparent px-3 py-[0.32rem]" id={LabelFor} />           
        </div>
    )
  }

  export default Input;