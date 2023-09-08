
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
        projectName="Where's Waldo"
        liveUrl="https://www.whereiswaldo.com"
        repoUrl="https://www.github.com/johndoe/waldo"
        technologies="JavaScript, React, Ruby, Ruby on Rails, PostgreSQL"
        description="Created a full stack photo tagging game using React+Rails"
        hit1="Built front end with React and React Hooks"
        hit2="Used Rails API app…"
        hit3="Stored data in databases…"
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
