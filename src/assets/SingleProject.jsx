import { useRef, useImperativeHandle, forwardRef, useState } from "react";


function SingleProject({ project, projects, setProjects }, ref) {

    const [addedTasks, setAddedTasks] = useState([]);

    const singleProjectRef = useRef();
    const newTaskRef = useRef();


  useImperativeHandle(ref, () => {
    return {
      open() {
        singleProjectRef.current.showModal();
      },
    };
  });

  if (!project) return null

  const addANewTask = () => {
    const newTask = newTaskRef.current.value
    setAddedTasks(prevTasks =>[... prevTasks, newTask])
    newTaskRef.current.value = ""
  }

  const deleteTask = (index) => {
    addedTasks.splice(index,1)
    setAddedTasks(addedTasks.slice())
  }

  const deleteProject = (index) => {
    projects.splice(index,1)
    setProjects(projects.slice())
    singleProjectRef.current.close()
  }


  return (
    <dialog ref={singleProjectRef}>
        <form method="dialog">
        <button>CLOSE</button><br /><br />
      </form>
      <button onClick={() => deleteProject()}>Delete</button><br /><br />
        <div>{project.title}</div>
        <div>{project.description}</div>
        <div>{project.date}</div>
        <div>TASKS</div>
        <input ref={newTaskRef} type="text" />   
        <button onClick={addANewTask}>Add Task</button>
        {addedTasks.length === 0 && <div>This project has no tasks yet</div>}
        {addedTasks.map((task, index) =>
            <div key={index}>
            <div>{task}</div>
            <button onClick={() => deleteTask(index)}>X</button>
            </div>
        )}
    </dialog>
  )
}

export default forwardRef (SingleProject)