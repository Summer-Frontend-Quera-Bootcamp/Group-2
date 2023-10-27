interface ITagTaskProps {
    tag?:string;
    colorTag?:string; 
    BgColor?:string; 
    
 }
 import React from "react";

  const TagTask:React.FC<ITagTaskProps> = ({tag,colorTag,BgColor}):JSX.Element  =>{
    return(
        
     <span className={`inline-block whitespace-nowrap rounded-full  px-[0.65em] py-[0.25em]  text-center align-baseline text-[0.75em] font-bold leading-none m-1`}
     style={{color:colorTag,backgroundColor:BgColor}} >
          {tag}
      </span>
       
    )
  }
//   relative mb-6
  export default TagTask;