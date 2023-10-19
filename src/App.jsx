
// import { StrictMode } from "react";
// import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
// import Login from "./pages/Login"
import Boardview from "./pages/Boardview"

function App() {
  return (
    <>
   {/* <Login/> */}
<Boardview/>
      <Router />
      {/* <StrictMode>
        <BrowserRouter>
          <App />
          <Router />
        </BrowserRouter>
      </StrictMode> */}
    </>
  );
}

export default App;
