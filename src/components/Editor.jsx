import "../styles/editor.css";

const Editor = ({ data, handleChange }) => {
  const [basicData, links] = data;
  const [handleChangeBasic, handleChangeLinks, handleClearAll, handleReset] =
    handleChange;
  return (
    <div className="editor">
      <form>
        <fieldset>
          <legend>Basic Information:</legend>
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
            type="number"
            max={9999999999}
            id="number"
            name="number"
            value={basicData.number}
            placeholder="123456789"
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
        </fieldset>

        <fieldset>
          <legend>Links</legend>
          {links.length > 0
            ? links.map((link) => {
                return (
                  <li key={link.id}>
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
          <div>
            <input type="text" />
            <button onClick={(e) => handleChangeLinks(e, "add")}>
              Add Link
            </button>
          </div>
        </fieldset>
      </form>
      <button onClick={handleReset}>Reset Example</button>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default Editor;
