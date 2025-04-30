import "../styles/preview.css";

function Preview({ data }) {
  const [basicData, links] = data;

  return (
    <>
      <div className="preview">
        <div className="preview-header">
          <div>
            <p>{basicData.email}</p>
            <p>{basicData.number}</p>
            <p>{basicData.location}</p>
          </div>
          <h1 className="ed-name">{basicData.name}</h1>
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
