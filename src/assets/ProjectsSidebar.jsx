import { useRef, useState } from "react";
import AddProject from "./AddProject"


function ProjectsSidebar() {

    const [projects, setProjects] = useState([]);

    const newProjectRef = useRef();

    const openNewProject = () => {
        newProjectRef.current.open()
    }

    const handleSaveProject = (projectData) => {
        setProjects((prevProjects) => [...prevProjects, projectData]);
      };


  return (<>
        <AddProject onSave={handleSaveProject} ref={newProjectRef}  />
        <div>Your Projects</div>
        <button onClick={openNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add project</button>
        <br />
        {projects.map(project=>
            <button className= "bg-stone-300" key={project.title}>{project.title}</button>
        )}
        {<div className="mt-24 text-center w-2/3">
            <div>No Projects selected</div>
            <div>Select a project or get started with a new one</div>
            <button onClick={openNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create a new project</button>
        </div>}
    </>
  )
}

export default ProjectsSidebar