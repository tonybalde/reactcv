import React, { useState } from "react";
import "../styles/Educations.css";
import EducationCard from "./EducationCard";
import { v4 as uuidv4 } from 'uuid';

function Education() {
  // Initialize the state to hold the list of education entries
  const [educationList, setEducationList] = useState([
    {
      educationTitle: "M.Sc. Computer Science, University of Munich, Germany.",
      startDate: "Aug 2015",
      finishDate: "Dec 2018",
    },
  ]);

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(), // Generate a unique ID
      educationTitle: "New Education Title",
      startDate: "Start Date",
      finishDate: "Finish Date",
    };
    // Use the spread operator to create a new list with the added education entry
    setEducationList([...educationList, newEducation]);
  };
  
  // Function to remove the last education entry
  const removeLastEducation = () => {
  if (educationList.length > 1) {
    // Use slice to create a copy of the list without the last entry
    const updatedList = educationList.slice(0, -1);
    setEducationList(updatedList);
    }
  };

  return (
    <div className="education-main-container">
      <h3>Education</h3>
      <hr />
      <div className="education-list">
        {educationList.map((education) => (
          <EducationCard
            key={education.id} // Use the ID as the key
            educationTitle={education.educationTitle}
            startDate={education.startDate}
            finishDate={education.finishDate}
          />
        ))}
      </div>
      <div className="education-btns-container">
        <button className="add-del-education-btn" onClick={addEducation}>
          Add Education
        </button>
        <button className="add-del-education-btn" onClick={removeLastEducation}>
          Remove Education
        </button>
      </div>
    </div>
  );
}

export default Education;
