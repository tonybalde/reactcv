
import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from 'uuid';

function Projects() {
  const [projectCount, setProjectCount] = useState(1);
  const [projectCards, setProjectCards] = useState([generateProjectCard()]);

  function generateProjectCard() {
    return (
      <ProjectCard
        key={uuidv4()}
        projectName="A Great App"
        liveUrl="https://www.google.com"
        repoUrl="https://www.github.com/johndoe/greatapp"
        technologies="Here are the technologies I used to build this app"
        description="A summary about the app"
        hit1="Hit one, something important about the app"
        hit2="Hit two, another relevant info"
        hit3="Hit three, some other info to mention"
      />
    );
  }

  const addProjectCard = () => {
    setProjectCount(projectCount + 1);
    const newProjectCard = generateProjectCard();
    setProjectCards([...projectCards, newProjectCard]);
  };

  const removeLastProjectCard = () => {
    if (projectCount > 1) {
      setProjectCount(projectCount - 1);
      const updatedProjectCards = [...projectCards];
      updatedProjectCards.pop();
      setProjectCards(updatedProjectCards);
    }
  };

  return (
    <div className="projects-main-container">
      <h3>Projects</h3>
      <hr />
      <div className="projects-list">
        {projectCards}
        <div className="project-btns">
          <button className="add-del-project-btn" onClick={addProjectCard}>Add Project</button>
          <button className="add-del-project-btn" onClick={removeLastProjectCard}>Remove Project</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
