import { Route, Routes /*Navigate*/ } from "react-router-dom";
import Test from "./pages/Test/Test";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/login" /*element={<Login />}*/ />
        <Route path="/register" /*element={<Register />}*/ />
        <Route path="/forgot" /* element={<Forgot />}*/ />
        <Route path="/test" element={<Test />} />
        {/*<Route path="/*" element={<Navigate to="" />} />*/}
      </Routes>
    </div>
  );
}
