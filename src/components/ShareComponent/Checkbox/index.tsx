interface ICheckboxProps {
    LabelName?:string;
    LabelFor:string;
 };
 import React from "react";

  const Checkbox:React.FC<ICheckboxProps> = ({LabelName,LabelFor}):JSX.Element  =>{
    return(
        <>
        <div className=" block min-h-[1.5rem] pr-[1.5rem] mb-6 ">
            <input
                className="relative -mr-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none "
                type="checkbox"
                value=""
                id={LabelFor} />
            <label
                className="inline-block pr-[0.5rem] hover:cursor-pointer"
                htmlFor={LabelFor}>
              {LabelName}
            </label>
        </div>
        </>
    )
  }
//   relative mb-6
  export default Checkbox;