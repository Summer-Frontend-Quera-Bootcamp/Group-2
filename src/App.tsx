
 import { StrictMode } from "react";


import React from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";

import LayoutLogin from "./components/ShareComponent/LayoutLogin";
import Boardview from "./pages/Boardview";
import Forgetpassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import RecoveryMail from "./pages/RecoveryMail";
import Layout from "./Layouts/layout";
import MenuSideBar from "./Layouts/MenuSidebar";
import SubMenu from "./Layouts/MenuSidebar/sidebar/SubMenu";
import ShareWorkspace from "./components/ShareWorkSpace";

const App = ():JSX.Element =>{
  return (
    <>
    <StrictMode>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<LayoutLogin/>}>
            <Route index element={<Login/>}></Route>
            <Route path="/Login" element={<Login/>}></Route> 
            <Route path="/RegisterPage" element={<RegisterPage/>}></Route> 
            <Route path="/Forgetpassword" element={<Forgetpassword/>}></Route>  
            <Route path="/RecoveryMail" element={<RecoveryMail/>}></Route>                                   
          </Route>
            <Route path='/Board' element={<SubMenu/>}>
            </Route>
         </Routes>
        </BrowserRouter>
        </StrictMode>
    </>
  );
}

export default App;
