import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamViewer from "./components/TeamViewer";

function App() {
  return (
    <div className="App h-screen bg-green-700">
      <TeamViewer />
    </div>
  );
}

export default App;
