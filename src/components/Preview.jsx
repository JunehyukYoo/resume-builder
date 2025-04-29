import "../styles/preview.css";

function Preview({ data }) {
  const [basicData, extraData] = data;

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
          <div>
            {extraData.links.map((link) => {
              return <p>{link}</p>;
            })}
          </div>
        </div>
        <hr></hr>
        <p>ADD MORE STUFF HERE</p>
      </div>
    </>
  );
}

export default Preview;
