import React, { useState } from "react";
import "../styles/EducationCard.css";

function EducationCard({ educationTitle, startDate, finishDate }) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingStartDate, setIsEditingStartDate] = useState(false);
  const [isEditingFinishDate, setIsEditingFinishDate] = useState(false);
  
  const [editedTitle, setEditedTitle] = useState(educationTitle);
  const [editedStartDate, setEditedStartDate] = useState(startDate);
  const [editedFinishDate, setEditedFinishDate] = useState(finishDate);

  // Function to handle click on the title span to enter edit mode
  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleStartDateClick = () => {
    setIsEditingStartDate(true);
  };

  const handleFinishDateClick = () => {
    setIsEditingFinishDate(true);
  };


  // Function to handle changes in the input field
  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setEditedStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEditedFinishDate(e.target.value);
  };

    // Function to save the edited title when clicking outside the input

  const handleInputBlur = () => {
    setIsEditingTitle(false);
    setIsEditingStartDate(false);
    setIsEditingFinishDate(false);
    
  };


  const handleInputKeyUp = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };


  return (
    <div>
      <div className="education-achievements">
        {isEditingTitle? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleInputBlur}
            onKeyUp={handleInputKeyUp}
            autoFocus
          />
        ) : (
          <span onClick={handleTitleClick} className="education-title" >
            {editedTitle}
          </span>
        )}
        <span className="education-date">
        {isEditingStartDate ? (
            <input
              type="text"
              value={editedStartDate}
              onChange={handleStartDateChange}
              onBlur={handleInputBlur}
              onKeyUp={handleInputKeyUp}
              autoFocus
            />
          ) : (
            <span onClick={handleStartDateClick}>{editedStartDate}</span>
          )}{" - "}
          {isEditingFinishDate ? (
            <input
              type="text"
              value={editedFinishDate}
              onChange={handleEndDateChange}
              onBlur={handleInputBlur}
              onKeyUp={handleInputKeyUp}
              autoFocus
            />
          ) : (
            <span onClick={handleFinishDateClick}>{editedFinishDate}</span>
          )}
        </span>
      </div>
    </div>
  );
}

export default EducationCard;

