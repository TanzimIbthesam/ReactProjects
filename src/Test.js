import { useState } from "react";

const Project = ({ project, statusToggle }) => {
  const handleToggle = () => {
    statusToggle(project);
  };
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      Status: {project.isCompleted ? "Complete" : "Incompelete"}{" "}
      <button onClick={handleToggle}>Complete</button>
    </div>
  );
};

const Tanzim = () => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "First title",
      description: "First description",
      isCompleted: false,
    },
    {
      id: "2",
      title: "First title",
      description: "First description",
      isCompleted: false,
    },
    {
      id: "3",
      title: "First title",
      description: "First description",
      isCompleted: false,
    },
    {
      id: "4",
      title: "First title",
      description: "First description",
      isCompleted: false,
    },
  ]);
  const handleProjectCompelete = (project) => {
    const newProjects = projects;
    newProjects.map((newProject, index) => {
      if (newProject.id == project.id) {
        newProject.isCompleted = !newProject.isCompleted;
      }
    });
    setProjects([...newProjects]);
  };
  return (
    <div>
      {projects.map((project) => {
        return (
          <Project
            project={project}
            statusToggle={handleProjectCompelete}
            key={project.id}
          />
        );
      })}
    </div>
  );
};
export default Test;