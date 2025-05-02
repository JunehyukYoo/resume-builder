import "../styles/preview.css";
import { formatPhoneNumber } from "../utils";
import { EducationItem, ExperienceItem } from "../items";

function Preview({ data }) {
  const [basicData, links, education, experience] = data;

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
        <hr></hr>
        <h2 style={{ textAlign: "left" }}>Education</h2>
        <hr></hr>
        {education.length > 0 &&
          education.map((edu) => <EducationItem key={edu.id} edu={edu} />)}
        <hr></hr>
        <h2 style={{ textAlign: "left" }}>Experience</h2>
        <hr></hr>
        {experience.length > 0 &&
          experience.map((exp) => <ExperienceItem key={exp.id} exp={exp} />)}
      </div>
    </>
  );
}

export default Preview;
