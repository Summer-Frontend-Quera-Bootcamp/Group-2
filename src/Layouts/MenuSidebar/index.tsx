import React from "react";

export default function MenuSideBar({children}) {
  return (
    <aside className="h-screen" style={{ position: "absolute", right: 0 }}>
      <nav className="h-full flex flex-col bg-white border-r shadow-lg">

        <div className="p-4 pb-2 flex justify-between items-center">
          <p
            style={{
              background: "-webkit-linear-gradient(#118C80, #4AB7D8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "32px",
              fontFamily: "IRANYekan",
              fontWeight: "800",
              paddingLeft:"30px",
              textTransform: "capitalize",
            }}
          >
            کوئرا تسک منیجر
          </p>
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


        <li style={{display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--S, 16px)",
        alignSelf: "stretch",
        }}>

        </li>

        <ul className="flex-1 px-3">{children}</ul>
       

        <div style={{display: "flex",
        width: "276px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "var(--S, 16px)",
        }}>
        
        <div className="flex items-center" style={{gap: "var(--XS, 8px)",
        }}>
          <p className="font-yekan">نیلوفر موجودی</p>
          <div className="bg-[#DBE4FF] text-[#4C6EF5]" style={{width:'36px', height:'36px', justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:'100px', fontSize:'12px', display:'flex'}}>NM</div>

        </div>

        <div style={{display: "flex",
        padding: "0px var(--XS, 8px)",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection:"row-reverse"
        }}>

        <div style={{display: "flex",
          alignItems: "flex-end",
          gap: "4px",
          }}>
        <span style={{color: "#818181",
        textAlign: "right",
        fontFamily: "IRANYekan",
        fontSize: "16px",
        }}>خروج</span>
        <div>icon</div>
        </div>


        <div className="bg-[#F1F3F5] " style={{width:'64px', height:'36px', padding:" 3px 3px 3px 31px" , justifyContent:"flex-end" , alignItems:"center" , borderRadius:"8px"}}>
          <div style={{borderRadius: "5px",
          background: "var(--White, #FFF)",
          boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          display: "flex",
          height: "30px",
          padding: "3px 3px 3px 0px",
          alignItems: "flex-start",
          gap: "4px",
          }}>
            <div style={{width: "var(--M, 24px)",
            height: "var(--M, 24px)",                 //put icon here
            }}></div>
          </div>

        </div>
        </div>

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

      
      </nav>
    </aside>
  );
}


export function SidebarItem({colorBox, text}){
  return(
    <li>

      <div style={{display: "flex",
      padding: "8px 15px 8px 164px",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "6px",
      alignSelf: "stretch",
      }}>
      </div>

      <div style={{display: "flex",
    padding: "4px",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "8px",
    alignSelf: "stretch",
    }}>
       <span style={{fontFamily: "IRANYekan",
       fontSize: "16px",
       fontStyle: "normal",
       fontWeight: "500",
       textTransform: "capitalize",
       }}>{text}</span>
      <button style={{
      background: colorBox,
      borderRadius: "4px",
      fontSize: "2xl",
      display: "flex",
      flex: "none",
      order: "0",
      flexGrow: "0",
      width: "20px",
      height: "20px"
    }}>
      </button>
      </div>
      </li>
  )
}

