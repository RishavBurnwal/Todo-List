import React from "react";

export const Header = ({ dateTime }) => {
  return (
    <header>
      <h1>Todo List</h1>
      <h2 className="date-time">{dateTime}</h2>
    </header>
  );
};
