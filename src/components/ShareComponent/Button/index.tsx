import React from "react";
interface IButtonProps {
    DspWidth: string;
    BtnValue: string;
    BtnColor: string;
    Handeling?: any;
    onClick?: (formValues: any) => void; 
  }
const Button:React.FC<IButtonProps> = ({DspWidth,BtnValue,BtnColor,onClick}):JSX.Element  =>{

return(
    <button type="button" 
        onClick={onClick}
        className={`${DspWidth}     
        rounded ${BtnColor} block px-6 pb-2 pt-2.5 text-white shadow-[0_0px_6px_-4px_#161f1a63] transition duration-800ms ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none`}>
    {BtnValue}
    </button>
)
}
// onClick={Handeling}
export default Button;