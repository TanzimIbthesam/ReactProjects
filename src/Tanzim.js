import Project from './Project'
import {  useState } from 'react';
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
      newProjects.forEach((newProject) => {
        if (newProject.id === project.id) {
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
  export default Tanzim;