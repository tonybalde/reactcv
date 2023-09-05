import React, { useState } from "react";
import "../styles/Skills.css";

function Skills({ languages, frameworks, platforms, tools, databases }){

    const [isEditingLanguages, setIsEditingLanguages] = useState(false);
    const [isEditingFrameworks, setIsEditingFrameworks] = useState(false);
    const [isEditingPlatforms, setIsEditingPlatforms] = useState(false);
    const [isEditingTools, setIsEditingTools] = useState(false);
    const [isEditingDatabases, setIsEditingDatabases] = useState(false);

    const [editedLanguages, setEditedLanguages] = useState(languages);
    const [editedFrameworks, setEditedFrameworks] = useState(frameworks);
    const [editedPlatforms, setEditedPlatforms] = useState(platforms);
    const [editedTools, setEditedTools] = useState(tools);
    const [editedDatabases, setEditedDatabases] = useState(databases);

    const handleEditLanguagesClick = () => {
        setIsEditingLanguages(true);
      };
    
      const handleEditFrameworksClick = () => {
        setIsEditingFrameworks(true);
      };
    
      const handleEditPlatformsClick = () => {
        setIsEditingPlatforms(true);
      };
    
      const handleEditToolsClick = () => {
        setIsEditingTools(true);
      };
    
      const handleEditDatabasesClick = () => {
        setIsEditingDatabases(true);
      };
    
      const handleInputChange = (event) => {
        if (isEditingLanguages) {
          setEditedLanguages(event.target.value);
        } else if (isEditingFrameworks) {
          setEditedFrameworks(event.target.value);
        } else if (isEditingPlatforms) {
          setEditedPlatforms(event.target.value);
        } else if (isEditingTools) {
          setEditedTools(event.target.value);
        } else if (isEditingDatabases) {
          setEditedDatabases(event.target.value);
        }
      };
    
      const handleInputBlur = () => {
        setIsEditingLanguages(false);
        setIsEditingFrameworks(false);
        setIsEditingPlatforms(false);
        setIsEditingTools(false);
        setIsEditingDatabases(false);
    
        if (isEditingLanguages) {
          // Handle saving changes for cityCountry
    
        } else if (isEditingFrameworks) {
          // Handle saving changes for email
    
        } else if (isEditingPlatforms) {
          // Handle saving changes for fullName
    
        } else if (isEditingTools) {
          // Handle saving changes for github
    
        } else if (isEditingDatabases) {
    
          
        }
      };
    
      const handleInputKeyPress = (event) => {
        if (event.key === "Enter") {
          handleInputBlur();
        }
      };


    return(
        <div className="skills-main-container">
            <h3>Skills</h3>
            <hr />              
            <div className="skills-container">
                <div className="skill-column">
                    <span><strong>Languages</strong>:
                            {isEditingLanguages ? (
                            <input
                            type="text"
                            value={editedLanguages}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyPress={handleInputKeyPress}
                            autoFocus
                            />
                        ) : (
                            <span onClick={handleEditLanguagesClick}> {editedLanguages}</span>
                        )}
                    </span>
                    <span><strong>Frameworks</strong>:
                    {isEditingFrameworks ? (
                            <input
                            type="text"
                            value={editedFrameworks}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyPress={handleInputKeyPress}
                            autoFocus
                            />
                        ) : (
                            <span onClick={handleEditFrameworksClick}> {editedFrameworks}</span>
                        )}
                     </span>
                    <span><strong>Platforms</strong>:
                    {isEditingPlatforms ? (
                            <input
                            type="text"
                            value={editedPlatforms}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyPress={handleInputKeyPress}
                            autoFocus
                            />
                        ) : (
                            <span onClick={handleEditPlatformsClick}> {editedPlatforms}</span>
                        )}
                     </span>
                </div>
                <div className="skill-column">
                    <span><strong>Tools</strong>:
                    {isEditingTools ? (
                            <input
                            type="text"
                            value={editedTools}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyPress={handleInputKeyPress}
                            autoFocus
                            />
                        ) : (
                            <span onClick={handleEditToolsClick}> {editedTools}</span>
                        )}
                     </span>
                    <span><strong>Databases</strong>:
                    {isEditingDatabases ? (
                            <input
                            type="text"
                            value={editedDatabases}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyPress={handleInputKeyPress}
                            autoFocus
                            />
                        ) : (
                            <span onClick={handleEditDatabasesClick}> {editedDatabases}</span>
                        )}
                     </span>
                </div>
            </div>
        </div>
    )
}

export default Skills;