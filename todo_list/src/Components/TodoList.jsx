import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ task, handleDeleteTodo, handleClearTodoData }) => {
  return (
    <>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => (
            <li key={index} className="todo-item">
              <span>{curTask}</span>

              <button className="check-btn">
                <MdCheck />
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(curTask)}
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {task.length > 0 && (
        <section>
          <button className="clear-btn" onClick={handleClearTodoData}>
            Clear All
          </button>
        </section>
      )}
    </>
  );
};
