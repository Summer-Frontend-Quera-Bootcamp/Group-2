import React, { useState } from "react";
import ProjectItem from "../ProjectItem";

interface Task {
  id: number;
  title: string;
  description: string;
  users: string[];
  deadline: string;
  priority: number;
}

interface Project {
  id: number;
  title: string;
  pendingTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "پروژه اول",
      pendingTasks: [
        {
          id: 1,
          title: "این یک تیتر برای این تسک است.",
          description: "-",
          users: ["*"],
          deadline: "6 آبان",
          priority: 0,
        },
        {
          id: 2,
          title: "این یک تیتر برای این تسک است.",
          description: "-",
          users: ["*"],
          deadline: "6 آبان",
          priority: 1,
        },
        {
          id: 3,
          title: "این یک تیتر برای این تسک است.",
          description: "-",
          users: ["*"],
          deadline: "6 آبان",
          priority: 2,
        },
        {
          id: 4,
          title: "این یک تیتر برای این تسک است.",
          description: "-",
          users: ["*"],
          deadline: "6 آبان",
          priority: 3,
        },
      ],
      inProgressTasks: [
        {
          id: 5,
          title: "این یک تیتر برای این تسک است.",
          description: "-",
          users: ["*"],
          deadline: "6 آبان",
          priority: 0,
        },
      ],
      doneTasks: [
        
      ],
    },
    
    // Add more projects here if needed
  ]);

  return (
    <div className="flex flex-col items-start gap-10">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;