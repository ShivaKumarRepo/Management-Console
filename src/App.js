import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Candidates from "./Pages/Candidates/Candidates";
import Jobs from "./Pages/Jobs/Jobs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
