import React, { useState, useRef } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({
  projectName,
  liveUrl,
  repoUrl,
  technologies,
  description,
  hit1,
  hit2,
  hit3,
}) {
  const [isEditingLiveUrl, setIsEditingLiveUrl] = useState(false);
  const [newLiveUrl, setNewLiveUrl] = useState(liveUrl);

  const [isEditingRepoUrl, setIsEditingRepoUrl] = useState(false);
  const [newRepoUrl, setNewRepoUrl] = useState(repoUrl);

  const inputRefLive = useRef(null);
  const inputRefRepo = useRef(null);

  const handleEditLiveUrlClick = () => {
    setIsEditingLiveUrl(true);
  };

  const handleEditRepoUrlClick = () => {
    setIsEditingRepoUrl(true);
  };

  const handleLiveUrlSave = () => {
    setIsEditingLiveUrl(false);
    // Save the newLiveUrl to your data or state here
    // You can perform validation or other actions before saving
  };

  const handleRepoUrlSave = () => {
    setIsEditingRepoUrl(false);
    // Save the newRepoUrl to your data or state here
    // You can perform validation or other actions before saving
  };

  const handleLiveUrlBlur = () => {
    handleLiveUrlSave();
  };

  const handleRepoUrlBlur = () => {
    handleRepoUrlSave();
  };

  const handleLiveUrlKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLiveUrlSave();
    }
  };

  const handleRepoUrlKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRepoUrlSave();
    }
  };

  return (
    <div className="project-card-container">
      <div className="project-name-repo">
        <span className="project-name">{projectName}</span>
        <div className="github-repo">
          <span className="span-btn">
            <button
              className="edit-btn"
              onClick={handleEditLiveUrlClick}
            ></button>
            {isEditingLiveUrl ? (
              <input
                ref={inputRefLive}
                type="text"
                value={newLiveUrl}
                onChange={(e) => setNewLiveUrl(e.target.value)}
                onBlur={handleLiveUrlBlur}
                onKeyDown={handleLiveUrlKeyDown}
              />
            ) : (
              <a href={newLiveUrl} target="_blank" rel="noreferrer">
                Live
              </a>
            )}
          </span>
          <span className="span-btn">
            <button
              className="edit-btn"
              onClick={handleEditRepoUrlClick}
            ></button>
            {isEditingRepoUrl ? (
              <input
                ref={inputRefRepo}
                type="text"
                value={newRepoUrl}
                onChange={(e) => setNewRepoUrl(e.target.value)}
                onBlur={handleRepoUrlBlur}
                onKeyDown={handleRepoUrlKeyDown}
              />
            ) : (
              <a href={newRepoUrl} target="_blank" rel="noreferrer">
                Repo
              </a>
            )}
          </span>
        </div>
      </div>
      <span className="project-technologies">{technologies}</span>
      <span className="project-description">{description}</span>
      <ul>
        <li>{hit1}</li>
        <li>{hit2}</li>
        <li>{hit3}</li>
      </ul>
    </div>
  );
}

export default ProjectCard;
