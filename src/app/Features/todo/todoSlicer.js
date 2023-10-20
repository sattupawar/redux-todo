// pure logic:

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", text: "Hare Krishna" },
  { id: "2", text: "Hare Ram" },
];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    removeTask(state, action) {
      return state.filter((task) => task.id !== action.payload.id);
    },
    // updateTask(state, action) {
    //   let { id, text } = action.payload;
    //   const existing = state.find((task) => task.id === id);

    //   if (existing) {
    //     existing.text = text;
    //   }
    // },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
