import React from "react";
import { Chrono } from 'react-chrono';
import "./App.css"
import dd from "./data.json"

const Timeline = () => {
  return (
    <div className="Timeline-box">
      <Chrono
        items={dd}
        mode="VERTICAL"
        slideShow
        slideItemDuration={3000}
        scrollable
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Timeline></Timeline>
    </div>
  );
}

export default App;
