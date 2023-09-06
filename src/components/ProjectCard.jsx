import React, { useState, useRef } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ projectName, liveUrl,repoUrl, technologies, description, hit1, hit2, hit3, }) {

  const [isEditingProjectName, setIsEditingProjectName] = useState(false);
  const [isEditingLiveUrl, setIsEditingLiveUrl] = useState(false);
  const [isEditingRepoUrl, setIsEditingRepoUrl] = useState(false);
  const [isEditingTechnologies, setIsEditingTechnologies] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingHit1, setIsEditingHit1] = useState(false);
  const [isEditingHit2, setIsEditingHit2] = useState(false);
  const [isEditingHit3, setIsEditingHit3] = useState(false);
  
  const [editedProjectName, setEditedProjectName] = useState(projectName);
  const [newLiveUrl, setNewLiveUrl] = useState(liveUrl);
  const [newRepoUrl, setNewRepoUrl] = useState(repoUrl);
  const [editedTechnologies, setEditedTechnologies] = useState(technologies);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedHit1, setEditedHit1] = useState(hit1);
  const [editedHit2, setEditedHit2] = useState(hit2);
  const [editedHit3, setEditedHit3] = useState(hit3);
  

  const inputRefLive = useRef(null);
  const inputRefRepo = useRef(null);

  const handleEditProjectNameClick = () => {
    setIsEditingProjectName(true);
  };

  const handleEditTechnologiesClick = () => {
    setIsEditingTechnologies(true);
  };

  const handleEditDescriptionClick = () => {
    setIsEditingDescription(true);
  };

  const handleEditHit1Click = () => {
    setIsEditingHit1(true);
  };

  const handleEditHit2Click = () => {
    setIsEditingHit2(true);
  };

  const handleEditHit3Click = () => {
    setIsEditingHit3(true);
  };

  const handleInputChange = (event) => {
    if (isEditingProjectName) {
      setEditedProjectName(event.target.value);
    } else if (isEditingTechnologies) {
      setEditedTechnologies(event.target.value);
    } else if (isEditingDescription) {
      setEditedDescription(event.target.value);
    } else if (isEditingHit1) {
      setEditedHit1(event.target.value);
    } else if (isEditingHit2) {
      setEditedHit2(event.target.value);
    } else if (isEditingHit3) {
      setEditedHit3(event.target.value);
    }
  };

  const handleInputBlur = () => {
    setIsEditingProjectName(false);
    setIsEditingTechnologies(false);
    setIsEditingDescription(false);
    setIsEditingHit1(false);
    setIsEditingHit2(false);
    setIsEditingHit3(false);

    if (isEditingProjectName) {
      // Handle saving changes for cityCountry
      
    } else if (isEditingTechnologies) {
      // Handle saving changes for email

    } else if (isEditingDescription) {
      // Handle saving changes for fullName

    } else if (isEditingHit1) {
      // Handle saving changes for github

    } else if (isEditingHit2) {
     
    } else if (isEditingHit3) {
     
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInputBlur();
    }
  };



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
        <span className="project-name">
          {isEditingProjectName ? (
            <input
              type="text"
              value={editedProjectName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditProjectNameClick}>{editedProjectName}</span>
          )}
        </span>
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
      <span className="project-technologies">
        {isEditingTechnologies ? (
              <input
                type="text"
                value={editedTechnologies}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyPress={handleInputKeyPress}
                autoFocus
              />
            ) : (
              <span onClick={handleEditTechnologiesClick}>{editedTechnologies}</span>
            )}
      </span>
      <span className="project-description">
        {isEditingDescription ? (
              <input
                type="text"
                value={editedDescription}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyPress={handleInputKeyPress}
                autoFocus
              />
            ) : (
              <span onClick={handleEditDescriptionClick}>{editedDescription}</span>
            )}
      </span>
      <ul>
        <li>
        {isEditingHit1 ? (
            <input
              type="text"
              value={editedHit1}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditHit1Click}>{editedHit1}</span>
          )}
        </li>
        <li>
        {isEditingHit2 ? (
            <input
              type="text"
              value={editedHit2}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditHit2Click}>{editedHit2}</span>
          )}
        </li>
        <li>
        {isEditingHit3 ? (
            <input
              type="text"
              value={editedHit3}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditHit3Click}>{editedHit3}</span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ProjectCard;
