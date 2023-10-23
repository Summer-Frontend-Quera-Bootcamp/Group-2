
// import { StrictMode } from "react";


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutLogin from "./components/ShareComponent/LayoutLogin";
import Forgetpassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

const App = ():JSX.Element =>{
  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<LayoutLogin/>}>
            <Route index element={<Login/>}></Route>
            <Route path="/Login" element={<Login/>}></Route> 
            <Route path="/RegisterPage" element={<RegisterPage/>}></Route> 
            <Route path="/Forgetpassword" element={<Forgetpassword/>}></Route> 
            
          </Route>
         </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
