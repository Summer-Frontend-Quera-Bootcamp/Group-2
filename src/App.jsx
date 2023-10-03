import "./App.css";
import { useState } from "react";
import Router from "./Router";
import New_work_space from "./NewWorkSpace/main/new-work-space";
function App() {

  // const [openModal , setOpenModal] = useState(false)
  return (
    <>
      <New_work_space />
      <Router />
      
    </>
  );
}

export default App;
