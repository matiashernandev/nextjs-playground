"use client";

import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider 👀");
  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [
    {
      id: 1,
      title: "my first task",
      description: "some first description",
    },
    {
      id: 2,
      title: "my second task",
      description: "some second description",
    },
    {
      id: 3,
      title: "my third task",
      description: "some third description",
    },
  ];

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
