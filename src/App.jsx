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
      tasks: [],
    };
    setProjects((prev) => [...prev, payload]);
    setView("Home");
  }

  function deleteProject(projectId) {
    if (!projectId || !selectedProject) return;
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  }

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) || null,
    [projects, selectedProjectId]
  );

  function addTask(taskText) {
    const text = taskText?.trim();
    if (!text || !selectedProjectId) return;

    setProjects((prev) =>
      prev.map((p) =>
        p.id === selectedProjectId
          ? {
              ...p,
              tasks: [
                ...(p.tasks ?? []),
                // prefer giving tasks an id for stable keys & deletes
                { id: crypto.randomUUID(), title: text },
              ],
            }
          : p
      )
    );
  }

  function deleteTask(taskId) {
    if (!taskId || !selectedProjectId) return;

    setProjects((prev) =>
      prev.map((p) =>
        p.id === selectedProjectId
          ? { ...p, tasks: (p.tasks ?? []).filter((t) => t.id !== taskId) }
          : p
      )
    );
  }

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
          <ProjectDetails
            selectedProject={selectedProject}
            deleteProject={deleteProject}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
