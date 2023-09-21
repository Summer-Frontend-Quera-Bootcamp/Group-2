import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
 const Header:React.FC = () :JSX.Element =>{
return(
     <header className="row">
        <div className="px-3 py-3 md:px-20 md:py-5 flex justify-between items-center">
       <div className="logo"><h2 className="font-bold">کوئرا تسک منجیر</h2></div> 
        <div className="loginMenu">
            <ul>
            <li className="inline"> <Link to="register" title="ثبت نام نکرده ای؟">ثبت نام نکرده ای؟</Link></li>
            <li className="inline "><Link className="btn_succ" to="/login" title="ثبت نام">ثبت نام</Link></li>           
            </ul>
        </div> 
        </div>
     </header> 
)
}

export default Header;