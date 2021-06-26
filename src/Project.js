// import { useState } from "react";

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

export default Project;