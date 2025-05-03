import { useState } from "react";
import "../styles/editor.css";
import {
  EducationFormItem,
  ExperienceFormItem,
  ProjectFormItem,
  LanguageFormItem,
} from "./items";

const Editor = ({ data, handleChange }) => {
  const [activeEduIdx, setActiveEduIdx] = useState(-1);
  const [activeExpIdx, setActiveExpIdx] = useState(-1);
  const [activeProjIdx, setActiveProjIdx] = useState(-1);
  const [activeLangIdx, setActiveLangIdx] = useState(-1);
  const [basicData, links, education, experience, projects, skills, languages] =
    data;
  const [
    handleChangeBasic,
    handleChangeLinks,
    handleChangeEducation,
    handleChangeExperience,
    handleChangeProjects,
    handleChangeSkills,
    handleChangeLanguages,
    handleClearAll,
    handleReset,
  ] = handleChange;

  return (
    <div className="editor">
      <div className="editor-header">
        <h1 className="title">Resume Builder</h1>
        <h5>@JunehyukYoo</h5>
      </div>

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
                    {link.url}

                    <button
                      id={link.id}
                      onClick={(e) => handleChangeLinks(e, "delete")}
                    >
                      Delete
                    </button>
                  </li>
                );
              })
            : null}
          <div className="editor-new-link">
            <input type="text" name="new-link" />
            <button
              style={{ margin: 0, fontSize: "0.75rem" }}
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
                  isActive={activeEduIdx === edu.id}
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

        <fieldset>
          <legend>Projects</legend>
          {projects.length > 0 &&
            projects.map((proj) => {
              return (
                <ProjectFormItem
                  key={proj.id}
                  proj={proj}
                  handleChange={[handleChangeProjects, setActiveProjIdx]}
                  isActive={activeProjIdx === proj.id}
                />
              );
            })}
          <button onClick={(e) => handleChangeProjects(e, "add")}>
            Add Project
          </button>
        </fieldset>

        <fieldset>
          <legend>Skills</legend>
          {skills.length > 0
            ? skills.map((skill) => {
                return (
                  <li key={skill.id} className="editor-link">
                    {skill.name}
                    <button
                      id={skill.id}
                      onClick={(e) => handleChangeSkills(e, "delete")}
                    >
                      Delete
                    </button>
                  </li>
                );
              })
            : null}
          <div className="editor-new-link">
            <input
              type="text"
              name="new-skill"
              placeholder="JavaScript, React, Node.js"
            />
            <button
              style={{ margin: 0, fontSize: "0.75rem" }}
              onClick={(e) => {
                handleChangeSkills(e, "add");
                e.target.previousElementSibling.value = "";
              }}
            >
              Add Skill
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Languages</legend>
          {languages.length > 0 &&
            languages.map((lang) => {
              return (
                <LanguageFormItem
                  key={lang.id}
                  lang={lang}
                  handleChange={[handleChangeLanguages, setActiveLangIdx]}
                  isActive={activeLangIdx === lang.id}
                />
              );
            })}
          <button onClick={(e) => handleChangeLanguages(e, "add")}>
            Add Language
          </button>
        </fieldset>
      </form>
      <button onClick={handleReset}>Reset Example</button>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default Editor;
