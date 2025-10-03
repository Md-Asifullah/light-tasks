import Button from "./Button";

export default function AddProject() {
  function handleCancel() {}
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get("title"));
    console.log(data.get("description"));
    console.log(data.get("date"));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Add Project
        </h1>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. Build a website"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white
                         px-4 py-2.5 text-gray-900 placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              name="title"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Briefly describe the project..."
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white
                         px-4 py-2.5 text-gray-900 placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              name="description"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white
                         px-4 py-2.5 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              name="date"
            />
          </div>

          {/* Buttons side by side & centered */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <Button
              text="Cancel"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              onClick={handleCancel}
            />
            <Button
              text="Save"
              className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-800 text-white"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
