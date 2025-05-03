import "../styles/preview.css";
import { formatPhoneNumber } from "../utils";
import { EducationItem, ExperienceItem, ProjectItem } from "./items";

function Preview({ data }) {
  const INT_TO_PROFICIENCY = {
    1: "Basic",
    2: "Conversational",
    3: "Fluent",
    4: "Native",
  };
  const [basicData, links, education, experience, projects, skills, languages] =
    data;

  return (
    <>
      <div className="preview">
        <div className="preview-header">
          <div style={{ textAlign: "left" }}>
            <h4>Contact</h4>
            <p>{basicData.email}</p>
            <p>{formatPhoneNumber(basicData.number)}</p>
            <p>{basicData.location}</p>
          </div>
          <div>
            <h1 className="ed-name">{basicData.name}</h1>
            <h2>{basicData.role}</h2>
          </div>
          <ul style={{ textAlign: "left" }}>
            <h4>Links</h4>
            {links.length > 0 &&
              links.map((link) => {
                return <li key={link.id}>{link.url}</li>;
              })}
          </ul>
        </div>
        <hr className="thick-border"></hr>
        <h2 style={{ textAlign: "left" }}>Education</h2>
        <hr></hr>
        {education.length > 0 &&
          education.map((edu) => <EducationItem key={edu.id} edu={edu} />)}
        <hr className="thick-border"></hr>
        <h2 style={{ textAlign: "left" }}>Experience</h2>
        <hr></hr>
        {experience.length > 0 &&
          experience.map((exp) => <ExperienceItem key={exp.id} exp={exp} />)}
        <hr className="thick-border"></hr>
        <h2 style={{ textAlign: "left" }}>Projects</h2>
        <hr></hr>
        {projects.length > 0 &&
          projects.map((proj) => <ProjectItem key={proj.id} proj={proj} />)}
        <hr className="thick-border"></hr>
        <div className="preview-skills">
          <h2 style={{ textAlign: "left" }}>Skills</h2>
          {skills.length > 0 &&
            skills
              .reduce((acc, skill) => {
                return acc + skill.name + ", ";
              }, "")
              .slice(0, -2)}
        </div>
        <div className="preview-languages">
          <h2 style={{ textAlign: "left" }}>Languages</h2>
          {languages.length > 0 &&
            languages
              .reduce((acc, lang) => {
                return (
                  acc +
                  lang.language +
                  " (" +
                  INT_TO_PROFICIENCY[lang.proficiency] +
                  "), "
                );
              }, "")
              .slice(0, -2)}
        </div>
        <hr className="thick-border"></hr>
      </div>
    </>
  );
}

export default Preview;
