import { Routes, Route } from "react-router-dom";
import "./App.css";
import TrackerPage from "./pages/TrackerPage";

function App() {
  return (
    <>
      <div className="bg-gray-950 min-h-screen w-screen">
        <Routes>
          <Route path="/" element={<TrackerPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
