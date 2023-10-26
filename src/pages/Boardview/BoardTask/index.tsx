
interface IBordTaskProps {
    PicProject?:string,
    ProjectName?:string;
    taskDes?:string;
    colorFlag?:string; 
    colorTag?:string; 
    endDay?:string;
    startday?:string,
    AbbUserName?:string,
    tag?:string
    children: React.ReactNode
 }
 import React, { Children } from "react";
import DotsHorizontal from "../../../components/ShareComponent/Icons/DotsHorizontal";
import Flag from "../../../components/ShareComponent/Icons/Flag";
import CheckCircle from "../../../components/ShareComponent/Icons/CheckCircle";
import CheckSquare from "../../../components/ShareComponent/Icons/CheckSquare";
import AlignRight from "../../../components/ShareComponent/Icons/AlignRight";

import "./style.css";

  const BoardTask:React.FC<IBordTaskProps> = ({
    PicProject,
    ProjectName,
    AbbUserName,
    taskDes,
    colorFlag,
    colorTag,
    endDay,
    startday,tag,
    children
}):JSX.Element  =>{
    const ShowImag = () => (
        <div className="w-fit" >
            <img src={PicProject} title={ProjectName} className="rounded"/>  
        </div>
      )
    return(
        <>
      <div className="BoardTask my-2">      
       { PicProject ? <ShowImag /> : null } {/*if project has image => show this*/}

     
         <div className="py-2 flex justify-between items-baseline">               
            <div><h6 className="text-[#534D60] text-sm">{ProjectName}</h6></div>
            <div className="AccUsers flex justify-end">
                <span>{AbbUserName}</span>
            </div>
        </div> 

        <div className="py-2 flex items-center">
            <p className="text-sm me-1">{taskDes}</p>
            <AlignRight size= {12} color="#BDC0C6"/>
        </div>

        <div className="flex row justify-start  py-2">
            <div className="priority flex items-center">
                <Flag color={colorFlag}></Flag>
                <p className="startDay text-xs">{startday}</p>
            </div>               
            <div className="endDay flex items-center text-xs text-[#BDC0C6] mr-1">
                <CheckSquare color="#BDC0C6"/> <p>{endDay}</p>
            </div>
        </div>

        <div className=" flex justify-start TagList py-2">
            {children}
        </div>

        <footer className="Footer mt-2 pt-1 border-t border-solid border-[#d8d8d8] flex justify-between">
            <CheckCircle/>
            <DotsHorizontal/>
        </footer>
       
        </div>
        </>
    )
  }
//   relative mb-6
  export default BoardTask;