'use client'

import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [task, setTask] = useState('')

  const { createTask } = useTasks()
  const router = useRouter()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(task)
    createTask(task.title, task.description)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" placeholder="write a title" />
      <textarea
        onChange={handleChange}
        name="description"
        placeholder="write a description"
      />
      <button>save</button>
    </form>
  )
}
