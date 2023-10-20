import React, { useState } from "react";
import { useSelector } from "react-redux";
import { removeTask } from "./todoSlicer";
import { useDispatch } from "react-redux";
import { updateTask } from "./todoSlicer";

export const TaskList = () => {
  let tasks = useSelector((state) => state.todo);
  let dispatch = useDispatch();
  let [taskData, setTaskData] = useState(
    tasks.map((task) => ({ id: task.id, text: task.text, active: true }))
  );

//   const handleEditSave = (index) => {
//     const updateData = [...taskData];
//     updateData[index].active = !updateData[index].active;
//     if (!updateData[index].active) {
//       dispatch(
//         updateTask({ id: updateData[index].id, text: updateData[index].text })
//       );
//     }
//     setTaskData(updateData);
//   };

  const handleInput = (index, value) => {
    const updateData = [...taskData];
    updateData[index].text = value;
    setTaskData(updateData);
  };
  return (
    <div>
      {tasks.map((todo, index) => (
        <div key={todo.id}>
          <input
            type="text"
            onChange={(e) => handleInput(index, e.target.value)}
            value={todo.text}
            disabled={todo.active}
          />
          {/* <button
            onClick={() => {
              handleEditSave(index);
            }}
          >
            {!todo.active ? "Edit" : "Save"}
          </button> */}
          <button onClick={() => dispatch(removeTask({ id: todo.id }))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
