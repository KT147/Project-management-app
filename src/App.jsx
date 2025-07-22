import { useState } from "react";
import AddProject from "./assets/AddProject";
import NoProjectSelected from "./assets/NoProjectSelected";
import ProjectsSidebar from "./assets/ProjectsSidebar";
import SingleProject from "./assets/SingleProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleselectProject = (id) => {
    setProjectsState((prewState) => {
      return {
        ...prewState,
        selectedProjectId: id,
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectsState((prewState) => {
      return {
        ...prewState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    };
  })
}

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SingleProject project={selectedProject} />

  if (projectsState.selectedProjectId === null) {
    content = <AddProject onCancel={handleCancelProject} onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } 

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleselectProject}
      />
      {content}
    </main>
  );
}

export default App;
