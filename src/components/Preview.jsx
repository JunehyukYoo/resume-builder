import "../styles/preview.css";

function Preview({ data }) {
  const [basicData, extraData] = data;

  return (
    <>
      <div className="preview">
        <h1 className="ed-name">{basicData.name}</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p>{basicData.email}</p>
          <p>{basicData.number}</p>
          <p>{basicData.location}</p>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default Preview;
