interface ITitleBordProps {
    LabelName?:string;
    TaskNumber?:number;
    ColorTitle:string;
    onClick?: (any) => void; 
 }
 import React from "react";
 import "./style.css";

  const TitleBord:React.FC<ITitleBordProps> = ({LabelName,TaskNumber,ColorTitle,onClick}):JSX.Element  =>{
    return(
        <>
      <div className="TitleBoard" style={{ borderTopColor: ColorTitle }} onClick={onClick}>
         <div className="flex justify-start items-baseline">
            <h6>{LabelName}</h6>
            <p>{TaskNumber}</p>
         </div>
        </div>
        </>
    )
  }
//   relative mb-6
  export default TitleBord;