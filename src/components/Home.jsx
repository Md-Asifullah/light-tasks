import notebook from "../assets/notebook.png";
import Button from "./Button";

export default function Home({ setView }) {
  function handleClick() {
    setView("AddProject");
  }

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* container (now vertically centered) */}
      <div className="mx-auto max-w-6xl px-6 min-h-screen flex items-center">
        <div className="grid items-center gap-10 md:grid-cols-2 w-full">
          {/* left: text + cta */}
          <div>
            <p className="text-sm font-medium tracking-wide text-sky-700/80">
              Projects
            </p>

            <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight text-sky-950">
              Nothing selected yet.
              <br className="hidden md:block" />
              Start your next project.
            </h1>

            <p className="mt-4 max-w-xl text-sky-800/80">
              Choose a project from the sidebar, or spin up a new one in
              seconds.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                text="Create a new project"
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-5 py-2.5 font-medium shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-sky-100 cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </div>

          {/* right: illustration */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-sky-200/50 to-sky-100/20 blur-2xl" />
            <div
              className="mx-auto w-64 md:w-80 aspect-square rounded-3xl
                          bg-white/70 ring-1 ring-sky-200 shadow-xl shadow-sky-900/5
                          flex items-center justify-center"
            >
              <img
                src={notebook}
                alt="Notebook"
                className="h-32 w-32 md:h-40 md:w-40 object-contain drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
