import { useState, useMemo } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddProject from "./components/AddProject";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [view, setView] = useState("Home");
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  function addProject(title, description, date) {
    const payload = {
      id: crypto.randomUUID(),
      title,
      description,
      date,
    };
    console.log(title);
    setProjects((prev) => [...prev, payload]);
    setView("Home");
  }
  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) || null,
    [projects, selectedProjectId]
  );
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar stacks on top for mobile, fixed width on md+ */}
      <Sidebar
        setView={setView}
        projects={projects}
        setSelectedProjectId={setSelectedProjectId}
      />

      {/* Main Area */}
      <main className="flex-1 bg-gray-100">
        {/* <AddProject /> */}
        {view === "Home" ? <Home setView={setView} /> : null}
        {view === "AddProject" ? <AddProject addProject={addProject} /> : null}
        {view === "ProjectDetails" ? (
          <ProjectDetails selectedProject={selectedProject} />
        ) : null}
      </main>
    </div>
  );
}

export default App;
