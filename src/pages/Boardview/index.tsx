

import TitleBord from "./TitleBord";
import React from 'react';
import BoardTask from "./BoardTask";

type FormProps = {
    BoardName: string;
    BoardCount?: number;
    BoardColor?: string;
    children?: React.ReactNode;
    listBoards?:string
  }; 
  const Boardview:React.FC<FormProps> = ({
    BoardName, BoardCount, BoardColor,children,listBoards}):JSX.Element  =>{  
return(
    <>
    <div className="container"> 
        <div className="flex justify-center" id="listBoards">
            <div className="w-[250px] m-2">
            <TitleBord LabelName="In progress" TaskNumber={5} ColorTitle='#ff0000'/ >
              <BoardTask/>
            </div>
            <div className="w-[250px] m-2">
            <TitleBord LabelName="Pending" TaskNumber={0} ColorTitle='#FAB005'/ >
            </div>
            <div className="w-[250px] m-2">
            <TitleBord LabelName="To do" TaskNumber={0} ColorTitle=' #FD7E14'/ >
            </div>
            <div className="w-[250px] m-2">
            <TitleBord LabelName="Done" TaskNumber={0} ColorTitle='#40C057'/ >
            </div>
           
            <div className="w-[250px] m-2" id="CreateBoard">
            <TitleBord LabelName="+ ساختن برد جدید"  ColorTitle="#fff"  />
            </div>
         </div>  
     </div>
     </>
)
}

export default Boardview;