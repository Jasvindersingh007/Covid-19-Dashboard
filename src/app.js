import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/screen/dashboard/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
