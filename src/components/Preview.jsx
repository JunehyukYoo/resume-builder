import "../styles/preview.css";
import { formatPhoneNumber } from "./utils";

function Preview({ data }) {
  const [basicData, links] = data;

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
            <h3>{basicData.role}</h3>
          </div>
          <ul>
            {links.length > 0 &&
              links.map((link) => {
                return <li key={link.id}>{link.url}</li>;
              })}
          </ul>
        </div>
        <hr></hr>
        <p>ADD MORE STUFF HERE</p>
      </div>
    </>
  );
}

export default Preview;
