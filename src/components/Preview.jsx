import "../styles/preview.css";
import { formatPhoneNumber } from "./utils";
import { EducationItem } from "./Items";

function Preview({ data }) {
  const [basicData, links, education] = data;

  return (
    <>
      <div className="preview">
        <div className="preview-header">
          <div>
            <p>{basicData.email}</p>
            <p>{formatPhoneNumber(basicData.number)}</p>
            <p>{basicData.location}</p>
          </div>
          <div>
            <h1 className="ed-name">{basicData.name}</h1>
            <h2>{basicData.role}</h2>
          </div>
          <ul>
            {links.length > 0 &&
              links.map((link) => {
                return <li key={link.id}>{link.url}</li>;
              })}
          </ul>
        </div>
        <hr></hr>
        <h3 style={{ textAlign: "left" }}>Education</h3>
        <hr></hr>
        {education.length > 0 &&
          education.map((edu) => <EducationItem key={edu.id} edu={edu} />)}
        <hr></hr>
        <h3 style={{ textAlign: "left" }}>Experience</h3>
        <hr></hr>
        <p>ADD MORE STUFF HERE</p>
      </div>
    </>
  );
}

export default Preview;
