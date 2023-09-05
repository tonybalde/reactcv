import React, { useState } from "react";
import "../styles/Generalinfo.css";

function Generalinfo({ city, country, email, fullName, github, linkedin, intro }) {
  const [isEditingCityCountry, setIsEditingCityCountry] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingFullName, setIsEditingFullName] = useState(false);
  const [isEditingGithub, setIsEditingGithub] = useState(false);
  const [isEditingLinkedin, setIsEditingLinkedin] = useState(false);

  const [editedCityCountry, setEditedCityCountry] = useState(`${city}, ${country}`);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedFullName, setEditedFullName] = useState(fullName);
  const [editedGithub, setEditedGithub] = useState(github);
  const [editedLinkedin, setEditedLinkedin] = useState(linkedin);

  const handleEditCityCountryClick = () => {
    setIsEditingCityCountry(true);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleEditFullNameClick = () => {
    setIsEditingFullName(true);
  };

  const handleEditGithubClick = () => {
    setIsEditingGithub(true);
  };

  const handleEditLinkedinClick = () => {
    setIsEditingLinkedin(true);
  };

  const handleInputChange = (event) => {
    if (isEditingCityCountry) {
      setEditedCityCountry(event.target.value);
    } else if (isEditingEmail) {
      setEditedEmail(event.target.value);
    } else if (isEditingFullName) {
      setEditedFullName(event.target.value);
    } else if (isEditingGithub) {
      setEditedGithub(event.target.value);
    } else if (isEditingLinkedin) {
      setEditedLinkedin(event.target.value);
    }
  };

  const handleInputBlur = () => {
    setIsEditingCityCountry(false);
    setIsEditingEmail(false);
    setIsEditingFullName(false);
    setIsEditingGithub(false);
    setIsEditingLinkedin(false);

    if (isEditingCityCountry) {
      // Handle saving changes for cityCountry
      const [editedCity, editedCountry] = editedCityCountry.split(", ");

    } else if (isEditingEmail) {
      // Handle saving changes for email

    } else if (isEditingFullName) {
      // Handle saving changes for fullName

    } else if (isEditingGithub) {
      // Handle saving changes for github

    } else if (isEditingLinkedin) {

      
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInputBlur();
    }
  };

  return (
    <div className="general-info-container">
      <div className="main-info">
        <div className="city-email-container">
          {isEditingCityCountry ? (
            <input
              type="text"
              value={editedCityCountry}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditCityCountryClick}>{editedCityCountry}</span>
          )}
          {isEditingEmail ? (
            <input
              type="text"
              value={editedEmail}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditEmailClick}>{editedEmail}</span>
          )}
        </div>
        <div className="full-name-container">
          {isEditingFullName ? (
            <input
              type="text"
              value={editedFullName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditFullNameClick}>{editedFullName}</span>
          )}
        </div>
        <div className="github-linkedin-container">
          {isEditingGithub ? (
            <input
              type="text"
              value={editedGithub}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditGithubClick}>{editedGithub}</span>
          )}
          {isEditingLinkedin ? (
            <input
              type="text"
              value={editedLinkedin}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              autoFocus
            />
          ) : (
            <span onClick={handleEditLinkedinClick}>{editedLinkedin}</span>
          )}
        </div>
      </div>
      <hr />
      <div className="intro">
         <span>{intro}</span>

        {/* TODO - Build the function to edit the Intro */}

      </div>
    </div>
  );
}

export default Generalinfo;
