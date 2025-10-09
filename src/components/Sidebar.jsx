import Button from "./Button";

export default function Sidebar({
  setView,
  projects = [],
  setSelectedProjectId,
}) {
  function handleClick() {
    setView("AddProject");
  }
  function handleShowProjectDetails(id) {
    setView("ProjectDetails");
    setSelectedProjectId(id);
  }
  return (
    <aside
      className="
        bg-gradient-to-b from-sky-950 to-sky-900 text-white
        w-full md:w-72 md:shrink-0
        md:h-screen md:sticky md:top-0
        border-b md:border-b-0 md:border-r border-sky-800/60
        p-6
        flex flex-col gap-5
      "
      aria-label="Project sidebar"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold tracking-wide">Your Projects</h2>
        </div>

        <span
          className="inline-flex items-center justify-center rounded-full
                     bg-sky-800 text-sky-100 text-xs px-2 py-0.5
                     ring-1 ring-white/10"
          aria-label={`${projects.length} projects`}
        >
          {projects.length}
        </span>
      </div>

      {/* Add button */}
      <Button
        text="+ Add Project"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white
                   rounded-xl py-2.5 font-medium shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-offset-2
                   focus:ring-emerald-500 focus:ring-offset-sky-900"
        onClick={handleClick}
      />

      {/* Project list */}
      <ul className="mt-1 space-y-2 overflow-y-auto flex-1 pr-1">
        {projects.length === 0 ? (
          <li>
            <div
              className="rounded-xl border border-dashed border-sky-700/60
                         bg-sky-900/30 p-4 text-sm text-sky-200/80"
            >
              No projects yet. Click{" "}
              <span className="font-semibold">“+ Add Project”</span> to create
              one.
            </div>
          </li>
        ) : (
          projects.map((project) => (
            <li key={project.id}>
              <div
                className="group flex items-center gap-3 rounded-xl
               border border-sky-800/50 bg-sky-900/40 p-3
               hover:bg-sky-800/50 hover:border-sky-700
               transition-colors cursor-pointer" // ⬅️ added
                role="button"
                tabIndex={0}
                onClick={() => handleShowProjectDetails(project.id)}
              >
                {/* Avatar / initial */}
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg
                             bg-sky-700/50 ring-1 ring-white/10
                             font-semibold text-sky-100"
                >
                  {(project.title?.[0] || "#").toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate font-medium text-white/95 group-hover:text-white">
                    {project.title || "Untitled"}
                  </p>
                  <p className="truncate text-xs text-sky-200/70">
                    {project.date || ""}
                  </p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>

      {/* Footer hint */}
      <p className="text-[11px] text-sky-200/60">
        Tip: Click “+ Add Project” to add a new one. Projects show here
        instantly.
      </p>
    </aside>
  );
}
