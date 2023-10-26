/* eslint-disable react/jsx-no-undef */

import { Route, Routes /*Navigate*/ } from "react-router-dom";
import Test from "../src/pages/Test/Test";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/Login" /*element={<Login/>}*/ />
        <Route path="/register" /*element={<Register />}*/ />
        <Route path="/forgot" /* element={<Forgot />}*/ />
        <Route path="/test" element={<Test />} />
        {/*<Route path="/*" element={<Navigate to="" />} />*/}
      </Routes>
    </div>
  );
}
