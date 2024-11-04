import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] p-10 w-screen h-screen">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
