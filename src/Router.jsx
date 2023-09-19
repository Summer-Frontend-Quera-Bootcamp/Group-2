import { Route, Routes /*Navigate*/ } from "react-router-dom";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/login" /*element={<Login />}*/ />
        <Route path="/register" /*element={<Register />}*/ />
        <Route path="/forgot" /* element={<Forgot />}*/ />
        {/*<Route path="/*" element={<Navigate to="" />} />*/}
      </Routes>
    </div>
  );
}
