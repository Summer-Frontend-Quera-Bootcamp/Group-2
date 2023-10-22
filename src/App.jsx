import "./App.css";
import Router from "./Router";
import MenuSideBar, { SidebarItem } from "./Layouts/MenuSidebar";

function App() {
  return (
    <>
      <MenuSideBar>

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

        <SidebarItem
        colorBox={"var(--blue-primary, #228BE6)"}
          text="درس طراحی الگوریتم"
        />

      </MenuSideBar>
      <Router />
    </>
  );
}

export default App;





