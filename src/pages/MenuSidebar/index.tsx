import React from "react";

function MenuSideBar({children}) {
  return (
    <aside className="h-screen flex flex-row-reverse">
      <nav className="w-64 bg-white border-r shadow-lg">
        <div className="p-4 pb-2">
          <p
            style={{
              background: "-webkit-linear-gradient(#118C80, #4AB7D8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "32px",
              fontFamily: "IRANYekan",
              fontWeight: "800",
            }}
          >
            کوئرا تسک منیجر
          </p>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        
        <div  style={{ display: "flex",
        alignItems: "center",
        gap: "var(--XS, 8px)",
        }}>
          <p className=" font-yekan">نیلوفر موجودی</p>
          <div className="bg-[#DBE4FF] text-[#4C6EF5] flex flex-none order-0 flex-grow-0  ml-10" style={{width:'36px' , height:'36px' , justifyContent:"center" , justifyItems:"center" , textAlign:"center", borderRadius:"100px"}}>NM</div>
          {/* <div className={`flex justify-between items-center w-52 ml-3`}></div> */}
        </div>
        <span className="text-xs text-gray-600">خروچ</span>
      </nav>
    </aside>
  );
}

export default MenuSideBar;
