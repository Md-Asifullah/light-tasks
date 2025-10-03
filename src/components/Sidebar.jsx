import Button from "./Button";

export default function Sidebar({ setView }) {
  function handleClick() {
    setView("AddProject");
  }

  return (
    <aside
      className="
        bg-sky-950 text-white
        w-full md:w-64 md:shrink-0
        md:h-screen md:sticky md:top-0
        p-6
        border-b md:border-b-0 md:border-r border-sky-900
        flex flex-col gap-4
      "
      aria-label="Project sidebar"
    >
      <h2 className="text-2xl font-bold">YOUR PROJECTS</h2>

      <Button
        text="+ Add Project"
        className="w-full bg-green-500 hover:bg-green-600 text-white"
        onClick={handleClick}
      />

      {/* Projects list */}
      <ul className="mt-2 space-y-2 overflow-y-auto flex-1 pr-1">
        {/* <li className="hover:text-gray-300 cursor-pointer">Project 1</li> */}
      </ul>
    </aside>
  );
}
