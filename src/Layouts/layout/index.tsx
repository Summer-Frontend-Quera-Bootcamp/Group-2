import React from "react";
import "./Layout.css";

// Importing all created components
import SubMenu from "../MenuSidebar/sidebar/SubMenu";
import Header from "../../components/Header";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div style={{width: "1440px", height:"1024px" , background:"#fff"}}>
      <Header />
      <SubMenu />
      {children}
    </div>
  );
}