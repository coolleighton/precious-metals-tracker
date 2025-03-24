import { Routes, Route } from "react-router-dom";
import "./App.css";
import TrackerPage from "./pages/TrackerPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <div className="bg-gray-950 min-h-screen w-screen">
        <Routes>
          <Route path="/" element={<TrackerPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
