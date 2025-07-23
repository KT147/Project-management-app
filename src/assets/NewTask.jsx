import { useState } from "react"

function NewTask({onAdd}) {

    const [enteredTask, setEnteredTask] = useState("")

    const handleChange = (event) => {
        setEnteredTask(event.target.value)
    }

    const handleClick = () => {
        if (enteredTask.trim() === ""){
            return alert("Tasks can't be empty!")
        }
        onAdd(enteredTask)
        setEnteredTask("")
    }

  return (
    <div className="flex items-centre gap-4">
        <input type="text" className="w-64 px-2 py-2 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  )
}

export default NewTask