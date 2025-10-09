import Button from "./Button";

export default function ProjectDetails({ selectedProject }) {
  function handleDeleteProject() {}
  function handleAddTask() {}

  if (!selectedProject) {
    return (
      <div className="flex-1 min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-6 min-h-screen flex items-center">
          <p className="text-sky-900">
            Project not found. Please select a project from the sidebar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-6xl px-6 min-h-screen flex items-start md:items-center">
        <section className="w-full py-10 md:py-16">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-sky-700/80">
                Project
              </p>
              <h1 className="mt-1 text-3xl md:text-4xl font-semibold leading-tight text-sky-950">
                {selectedProject.title || "Untitled"}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                {selectedProject.date ? (
                  <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 ring-1 ring-sky-200 text-sky-800">
                    {selectedProject.date}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                text="Delete"
                type="button"
                className="px-5 py-2.5 rounded-xl border border-sky-200 bg-white text-sky-800 hover:bg-white/80 shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-sky-50"
                onClick={handleDeleteProject}
              />
            </div>
          </div>

          {/* Description */}
          {selectedProject.description ? (
            <p className="mt-6 max-w-3xl text-sky-800/90">
              {selectedProject.description}
            </p>
          ) : (
            <p className="mt-6 max-w-3xl text-sky-700/70 italic">
              No description yet.
            </p>
          )}

          {/* Divider */}
          <div className="mt-8 border-t border-sky-200/70" />

          {/* Tasks */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-sky-900">Tasks</h2>

            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTask();
              }}
            >
              <input
                type="text"
                name="task"
                placeholder="Add a task…"
                className="w-full sm:flex-1 rounded-xl border border-sky-200 bg-white/90
                           px-4 py-3 text-sky-900 placeholder:text-sky-400
                           shadow-sm ring-1 ring-white
                           focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              <Button
                text="+ Add Task"
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-sky-50"
              />
            </form>

            {/* Empty state for tasks (replace with real list when you add tasks) */}
            <div className="mt-6 rounded-xl border border-dashed border-sky-300/70 bg-white/60 p-4 text-sm text-sky-800/80">
              This project does not have any tasks yet.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
