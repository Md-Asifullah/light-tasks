import Button from "./Button";

export default function Sidebar() {
  function handleClick() {}

  return (
    <div className="w-1/5 bg-sky-950 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">YOUR PROJECTS</h2>
      <Button
        text="Add Task"
        className="bg-green-500 hover:bg-green-600 text-white"
        onClick={handleClick}
      />
      <ul className="space-y-4">
        <li className="hover:text-gray-300 cursor-pointer">Project 1</li>
        <li className="hover:text-gray-300 cursor-pointer">Project 2</li>
        <li className="hover:text-gray-300 cursor-pointer">Project 3</li>
        <li className="hover:text-gray-300 cursor-pointer">Project 4</li>
      </ul>
    </div>
  );
}
