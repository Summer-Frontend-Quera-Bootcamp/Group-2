
interface ITitleBordProps {
    LabelName?:string;
    TaskNumber?:number;
    onClick?: (any) => void; 
 }
 import React from "react";
import DotsHorizontal from "../../../components/ShareComponent/Icons/DotsHorizontal";
import Flag from "../../../components/ShareComponent/Icons/Flag";
import ChekList from "../../../components/ShareComponent/Icons/ChekList";
import CheckCircle from "../../../components/ShareComponent/Icons/CheckCircle";
import "./style.css";
import Comment from "../../../components/ShareComponent/Icons/Comment";


  const BoardTask:React.FC<ITitleBordProps> = ({LabelName,TaskNumber,onClick}):JSX.Element  =>{
    return(
        <>
      <div className="BoardTask my-2">
         <div className="">
         <div className="grid grid-cols-2 gap-2 flex justify-between items-baseline">
         <Comment/>
         <div><h6>ProjectName</h6></div>

         </div>
           
            <p>askName</p>
            <div className="flex row justify-center grid grid-cols-2 gap-2">
                <div className="priority"><Flag ></Flag></div>
                <div className="startDay"></div>
                <div className="endDay "> <ChekList/> </div>
            </div>
            <div className=" flex justify-center" id="Tags">
            <span className={`inline-block whitespace-nowrap rounded-full  px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-#fab005-600/[.06] text-#fab005-600`}>
             Primary
            </span>

{/* ${InputWidth} */}
            </div>
            <footer className="Footer border border-solid border-slate-500 flex justify-between">
                <CheckCircle/>
                <DotsHorizontal/>
            </footer>
         </div>
        </div>
        </>
    )
  }
//   relative mb-6
  export default BoardTask;