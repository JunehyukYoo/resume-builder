import { useState } from "react";
import "../styles/editor.css";
import { EducationFormItem, ExperienceFormItem } from "../items";

const Editor = ({ data, handleChange }) => {
  const [activeEduIdx, setActiveEduIdx] = useState(-1);
  const [activeExpIdx, setActiveExpIdx] = useState(-1);
  const [basicData, links, education, experience] = data;
  const [
    handleChangeBasic,
    handleChangeLinks,
    handleChangeEducation,
    handleChangeExperience,
    handleClearAll,
    handleReset,
  ] = handleChange;

  return (
    <div className="editor">
      <form>
        <fieldset>
          <legend>Basic Information</legend>
          <label htmlFor="name">Fullname: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={basicData.name}
            placeholder="John Doe"
            onChange={handleChangeBasic}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={basicData.email}
            placeholder="john.doe@gmail.com"
            onChange={handleChangeBasic}
          />
          <label htmlFor="number">Phone Number: </label>
          <input
            type="text"
            id="number"
            name="number"
            value={basicData.number}
            placeholder="1234567890"
            onChange={handleChangeBasic}
          />
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={basicData.location}
            placeholder="Chicago, IL"
            onChange={handleChangeBasic}
          />
          <label htmlFor="role">Role: </label>
          <input
            type="text"
            id="role"
            name="role"
            value={basicData.role}
            placeholder="Software Engineer"
            onChange={handleChangeBasic}
          />
        </fieldset>

        <fieldset>
          <legend>Links</legend>
          {links.length > 0
            ? links.map((link) => {
                return (
                  <li key={link.id} className="editor-link">
                    {link.url}{" "}
                    <span>
                      <button
                        id={link.id}
                        onClick={(e) => handleChangeLinks(e, "delete")}
                      >
                        Delete
                      </button>
                    </span>
                  </li>
                );
              })
            : null}
          <div className="editor-new-link">
            <input type="text" name="new-link" />
            <button
              onClick={(e) => {
                handleChangeLinks(e, "add");
                e.target.previousElementSibling.value = "";
              }}
            >
              Add Link
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          {education.length > 0 &&
            education.map((edu) => {
              return (
                <EducationFormItem
                  key={edu.id}
                  edu={edu}
                  handleChange={[handleChangeEducation, setActiveEduIdx]}
                  isActive={activeEduIdx == edu.id}
                />
              );
            })}
          <button onClick={(e) => handleChangeEducation(e, "add")}>
            Add Education
          </button>
        </fieldset>

        <fieldset>
          <legend>Experience</legend>
          {experience.length > 0 &&
            experience.map((exp) => {
              return (
                <ExperienceFormItem
                  key={exp.id}
                  exp={exp}
                  handleChange={[handleChangeExperience, setActiveExpIdx]}
                  isActive={activeExpIdx == exp.id}
                />
              );
            })}
          <button onClick={(e) => handleChangeExperience(e, "add")}>
            Add Experience
          </button>
        </fieldset>
      </form>
      <button onClick={handleReset}>Reset Example</button>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default Editor;
