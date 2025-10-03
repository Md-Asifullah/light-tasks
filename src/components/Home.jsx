import notebook from "../assets/notebook.png";
import Button from "./Button";

export default function Home({ setView }) {
  function handleClick() {
    setView("AddProject");
  }

  return (
    <div className="flex-1 bg-gray-100 p-6 grid min-h-screen place-items-center">
      <div className="flex flex-col items-center text-center gap-4">
        <img
          src={notebook}
          alt="Notebook"
          className="w-40 h-40 object-contain"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          No Projects Selected
        </h1>
        <p className="text-gray-700">
          Select a project or get started with a new one
        </p>
        <Button
          text="Create a new project"
          className="bg-sky-600 hover:bg-sky-800 text-white"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
