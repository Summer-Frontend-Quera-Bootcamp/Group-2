import "./App.css";
import Router from "./Router";
import LoginRegister from "./components/LoginRegister"
import NewTaskCard from "./components/NewTask";
import ProjectList from "./components/listview/ProjectList";

function App() {
  return (
    <>
   
    <NewTaskCard/>
      <Router />
    </>
  );
}

export default App;
