import "./App.css";
// import { useState } from "react";
import Router from "./Router";
import New_work_space from "./NewWorkSpace";
import New_work_color from "./NewWorkSpace/NewWorkColor";
import New_work_info from "./NewWorkSpace/NewWorkInfo";
function App() {
  // const [openModal , setOpenModal] = useState(false)
  return (
    <>
      <New_work_space />
      <New_work_color/>
      <New_work_info/>
      <Router />
      
    </>
  );
}

export default App;
