import Button from "./Button";

export default function AddProject({ addProject }) {
  function handleCancel(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    addProject(data.get("title"), data.get("description"), data.get("date"));
    e.currentTarget.reset();
  }

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20 grid place-items-center">
        <section className="w-full">
          <p className="text-sm font-medium tracking-wide text-sky-700/80 text-center">
            Projects
          </p>
          <h1 className="mt-2 text-center text-3xl md:text-4xl font-semibold leading-tight text-sky-950">
            Create a new project
          </h1>
          <p className="mt-3 text-center text-sky-800/80">
            Give your project a clear title and a short description.
          </p>

          <form
            className="mt-10 space-y-6 max-w-xl mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-sky-900"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g. Build a website"
                className="mt-2 w-full rounded-xl border border-sky-200 bg-white/90
                           px-4 py-3 text-sky-900 placeholder:text-sky-400
                           shadow-sm ring-1 ring-white
                           focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-sky-900"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Briefly describe the project..."
                className="mt-2 w-full rounded-xl border border-sky-200 bg-white/90
                           px-4 py-3 text-sky-900 placeholder:text-sky-400
                           shadow-sm ring-1 ring-white
                           focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Date — now full width */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-sky-900"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="mt-2 w-full rounded-xl border border-sky-200 bg-white/90
                           px-4 py-3 text-sky-900
                           shadow-sm ring-1 ring-white
                           focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Actions — right-aligned, primary on the far right */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <Button
                text="Cancel"
                type="button"
                className="px-5 py-2.5 rounded-xl border border-sky-200 bg-white text-sky-800 hover:bg-white/80 shadow-sm
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-sky-50"
                onClick={handleCancel}
              />
              <Button
                text="Save"
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-sky-50"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
