"use client"

import { useTasks } from "@/context/TasksContext"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Page({ params }) {
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const { createTask, tasks, updateTask } = useTasks()
  const router = useRouter()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      updateTask(params.id, task)
    } else {
      createTask(task.title, task.description)
    }

    router.push("/")
  }
  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id)
      if (taskFound) {
        setTask(taskFound.title, taskFound.description)
      }
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input value={task.title} onChange={handleChange} name="title" placeholder="write a title" />
      <textarea value={task.description}
        onChange={handleChange}
        name="description"
        placeholder="write a description"
      />
      <button>save</button>
    </form>
  )
}
