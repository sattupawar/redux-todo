import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./todoSlicer";
import { nanoid } from "@reduxjs/toolkit";

export const FirstInput = () => {
  const dispatch = useDispatch();
  let [input, setInput] = useState("");

  return (
    <div>
      <h2>write your billionaires task</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (input) {
            dispatch(addTask({ id: nanoid(), text: input }));
          }
            setInput("");
        }}
      >
        <input
          type="text"
          placeholder="Write your tasks..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
