import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Main Area</h1>
        <p className="text-gray-700">
          This is where your project management content will go.
        </p>
      </div>
    </div>
  );
}

export default App;
