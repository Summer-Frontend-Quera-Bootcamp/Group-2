import React from "react";
import MenuSideBar from "..";
import { SidebarItem } from "..";

function SubMenu() {
  return (
    <>
      <MenuSideBar>
      <li>

      <div style={{display: "flex",
      justifyContent:"space-between",
      alignItems: "center",
      alignSelf: "stretch"}}>
      <button>icons</button>
      <div style={{color: "var(--Black, #1E1E1E)",
      textAlign: "right",
      fontFamily: "IRANYekanWeb",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "800",
      lineHeight: "normal",
      textTransform: "capitalize"}}>ورک‌اسپیس‌ها</div>
      </div>

      {/* space between each switch */}
  <div style={{display: "flex",
      padding: "8px 15px 8px 164px",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "6px",
      alignSelf: "stretch",
      }}>
      </div>


<div>
  <input placeholder="جستجو کنید" style={{display: "flex",
  padding: "8px 15px 8px 164px",
  justifyContent: "flex-end",
  alignItems: "center",
  alignSelf: "stretch",
  gap: "6px",
  background: "#F6F7F9",
  borderRadius: "4px",
  width: "274px",
  textAlign:"right"
  }}></input>
  </div>

{/* space between each switch */}
  <div style={{display: "flex",
      padding: "8px 15px 8px 164px",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "6px",
      alignSelf: "stretch",
      }}>
      </div>

<div style={{display: "flex",
height: "var(--L, 32px)",
padding: "10px",
justifyContent: "center",
gap: "4px",
alignItems: "center",
alignSelf: "stretch",
background: "#D3D3D3",
borderRadius: "6px",
}}>
  <p>ساختن اسپیس جدید</p>
  <button style={{width: "var(--M, 24px)",
  height: "var(--M, 24px)",
  flexShrink: "0",
  }}>icon</button>

</div>

      </li>
        <SidebarItem
        colorBox={" var(--green-primary, #40C057)"}
        text="درس مدیریت پروژه"
          
        />
        <SidebarItem
        colorBox={" var(--yellow-primary, #FAB005)"}
        text="کارهای شخصی"
         
        />
        
        <SidebarItem
        colorBox={" var(--red-primary, #FA5252)"}
        text="درس کامپایلر"
        />
      <div className="flex justify-center mt-2">
        <button className="text-[#208D8E] bg-[#fff] border rounded-lg font-yekan" style={{width:"274px" ,height: '36px', borderRadius:"var(--XS, 8px)", padding:"4px"}}>ساختن پروژه جدید</button>
        </div>


        <SidebarItem
        colorBox={"var(--blue-primary, #228BE6)"}
          text="درس طراحی الگوریتم"
        />

      </MenuSideBar>
    </>
  );
}

export default SubMenu;





