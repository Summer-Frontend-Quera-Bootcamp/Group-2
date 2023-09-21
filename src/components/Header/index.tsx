import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
 const Header = () =>{
return(
     <header className="row">
        <div className="px-20 py-5 flex justify-between">
       <div className="logo"><h2 className="font-bold">کوئرا تسک منجیر</h2></div> 
        <div className="loginMenu">
            <ul>
            <li className="inline"> <Link to="register" >ثبت نام نکرده ای؟</Link></li>
            <li className="inline "><Link className="btn_succ" to="/login">ثبت نام</Link></li>           
            </ul>
        </div> 
        </div>
     </header> 
)
}

export default Header;