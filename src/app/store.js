import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/todo/todoSlicer";
export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
