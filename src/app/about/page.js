"use client";

import { useTasks } from "@/context/TasksContext";

export default function Page() {
  const { tasks } = useTasks();
  console.log(tasks);
  return <div>page</div>;
}
