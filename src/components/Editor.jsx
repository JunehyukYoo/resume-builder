import "../styles/editor.css";

const Editor = ({ data, handleChange }) => {
  const [basicData, extraData] = data;
  const [handleChangeBasic, handleChangeExtra] = handleChange;
  return (
    <div className="editor">
      <h2>Editor</h2>
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

        <div>ADD WEBSITES/LINKS/SOCIAL MEDIA FUNCTIONALITY</div>
      </form>
    </div>
  );
};

export default Editor;
