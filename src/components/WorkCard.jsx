import React, { useState } from "react";
import "../styles/WorkCard.css";

function WorkCard({ companyName, companyLocation, startDate, endDate, role, roleDescription }) {
  const [isEditingCompanyName, setIsEditingCompanyName] = useState(false);
  const [isEditingCompanyLocation, setIsEditingCompanyLocation] = useState(false);
  const [isEditingStartDate, setIsEditingStartDate] = useState(false);
  const [isEditingEndDate, setIsEditingEndDate] = useState(false);
  const [isEditingRole, setIsEditingRole] = useState(false);
  const [isEditingRoleDescription, setIsEditingRoleDescription] = useState(false);

  const [editedCompanyName, setEditedCompanyName] = useState(companyName);
  const [editedCompanyLocation, setEditedCompanyLocation] = useState(companyLocation);
  const [editedStartDate, setEditedStartDate] = useState(startDate);
  const [editedEndDate, setEditedEndDate] = useState(endDate);
  const [editedRole, setEditedRole] = useState(role);
  const [editedRoleDescription, setEditedRoleDescription] = useState(roleDescription);

  const handleCompanyNameClick = () => {
    setIsEditingCompanyName(true);
  };

  const handleCompanyLocationClick = () => {
    setIsEditingCompanyLocation(true);
  };

  const handleStartDateClick = () => {
    setIsEditingStartDate(true);
  };

  const handleEndDateClick = () => {
    setIsEditingEndDate(true);
  };

  const handleRoleClick = () => {
    setIsEditingRole(true);
  };

  const handleRoleDescriptionClick = () => {
    setIsEditingRoleDescription(true);
  };

  const handleCompanyNameChange = (e) => {
    setEditedCompanyName(e.target.value);
  };

  const handleCompanyLocationChange = (e) => {
    setEditedCompanyLocation(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setEditedStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEditedEndDate(e.target.value);
  };

  const handleRoleChange = (e) => {
    setEditedRole(e.target.value);
  };

  const handleRoleDescriptionChange = (e) => {
    setEditedRoleDescription(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditingCompanyName(false);
    setIsEditingCompanyLocation(false);
    setIsEditingStartDate(false);
    setIsEditingEndDate(false);
    setIsEditingRole(false);
    setIsEditingRoleDescription(false);
  };

  const handleInputKeyUp = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  return (
    <div className="work-card-container">
      <div className="work-name-location">
        <h3 className="work-company-title-location">
          {isEditingCompanyName ? (
            <input
              type="text"
              value={editedCompanyName}
              onChange={handleCompanyNameChange}
              onBlur={handleInputBlur}
              onKeyUp={handleInputKeyUp}
              autoFocus
            />
          ) : (
            <span onClick={handleCompanyNameClick}>{editedCompanyName}</span>
          )}{" | "}
          {isEditingCompanyLocation ? (
            <input
              type="text"
              value={editedCompanyLocation}
              onChange={handleCompanyLocationChange}
              onBlur={handleInputBlur}
              onKeyUp={handleInputKeyUp}
              autoFocus
            />
          ) : (
            <span onClick={handleCompanyLocationClick}>{editedCompanyLocation}</span>
          )}
        </h3>
        <div className="work-dates">
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
          {isEditingEndDate ? (
            <input
              type="text"
              value={editedEndDate}
              onChange={handleEndDateChange}
              onBlur={handleInputBlur}
              onKeyUp={handleInputKeyUp}
              autoFocus
            />
          ) : (
            <span onClick={handleEndDateClick}>{editedEndDate}</span>
          )}
        </div>
      </div>
      {isEditingRole ? (
        <input
          type="text"
          value={editedRole}
          onChange={handleRoleChange}
          onBlur={handleInputBlur}
          onKeyUp={handleInputKeyUp}
          autoFocus
        />
      ) : (
        <span className="work-role" onClick={handleRoleClick}>
          {editedRole}
        </span>
      )}
      {isEditingRoleDescription ? (
        <input
          type="text"
          value={editedRoleDescription}
          onChange={handleRoleDescriptionChange}
          onBlur={handleInputBlur}
          onKeyUp={handleInputKeyUp}
          autoFocus
        />
      ) : (
        <span onClick={handleRoleDescriptionClick}>{editedRoleDescription}</span>
      )}
    </div>
  );
}

export default WorkCard;
