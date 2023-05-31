import { useTasks } from "@/context/TasksContext"
import { useRouter } from "next/navigation"

export default function TaskCard({ task }) {
  const router = useRouter()

  const { deleteTask } = useTasks()

  return (

    <div
      onClick={() => router.push(`edit/${task.id}`)}
      className="bg-slate-800 text-white border-2 m-5"
    >

      <h1>{task.title}</h1>
      <button onClick={(e) => {
        e.stopPropagation()

        const accept = confirm("Are you sure?")

        if (accept) deleteTask(task.id)
      }}>Delete</button>
      <p>{task.description}</p>
    </div>
  )
}
