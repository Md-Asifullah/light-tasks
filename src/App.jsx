import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddProject from "./components/AddProject";

function App() {
  const [view, setView] = useState("Home");
  const [projects, setProjects] = useState([]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar stacks on top for mobile, fixed width on md+ */}
      <Sidebar setView={setView} />

      {/* Main Area */}
      <main className="flex-1 bg-gray-100">
        {/* <AddProject /> */}
        {view === "Home" ? <Home setView={setView} /> : null}
        {view === "AddProject" ? <AddProject /> : null}
      </main>
    </div>
  );
}

export default App;
