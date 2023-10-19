
 import React, { useState } from "react";

interface IInputProps {
  LabelName?:string;
  InputName?:string;
  LabelFor:string;
  InputType:string;
  InputValue?:any;
  InputWidth?:string;
  onChange: (value: string, inputName: string) => void;
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
      const [inputValue, setInputValue] = useState(InputValue || '');
      const [form,setForm]= useState<inputProps>({  });  

      function HandelChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        setInputValue(newValue);
        setForm({ [e.target.name]: newValue });
      }
      
      console.log(form) 
    return(
        <div className="relative mb-6" data-te-input-wrapper-init>
        <label
            htmlFor={LabelFor}
            className={`mt-1 block ${InputWidth}`}>{LabelName}</label>
     
        <input
          type={InputType}
          name={InputName}
          onChange={HandelChange}
          value={inputValue.inputName}
          className={`peer block min-h-[auto] ${InputWidth} rounded border-slate-800 bg-transparent px-3 py-[0.32rem]`}
          id={LabelFor}
        />

        </div>
    )
  }

  export default Input;