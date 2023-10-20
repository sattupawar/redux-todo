import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FirstInput } from "./app/Features/todo/FirstInput";
import { TaskList } from "./app/Features/todo/TaskList";

function App() {
  return (
    <>
      <FirstInput />
      <TaskList />
    </>
  );
}

export default App;
