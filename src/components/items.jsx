export function EducationItem({ edu }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p style={{ fontSize: "20px" }}>{edu.school}</p>
        <p style={{ fontSize: "16px" }}>
          {edu.startDate} – {edu.endDate}
        </p>
      </div>
      {!(edu.school === "Untitled") && (
        <div
          style={{
            fontSize: "0.8rem",
            textAlign: "left",
          }}
        >
          <p>
            {edu.degree} in {edu.major}
          </p>
          <p>{`GPA: ${edu.gpa}`}</p>
          <p>Relevant Coursework: {edu.relevantCoursework.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export function EducationFormItem({ isActive, edu, handleChange }) {
  const [handleChangeEducation, setActiveEduIdx] = handleChange;
  return !isActive ? (
    <div key={edu.id}>
      {edu.school}
      <span>
        <button id={edu.id} onClick={(e) => setActiveEduIdx(e.target.id)}>
          Edit
        </button>
      </span>
    </div>
  ) : (
    <div id={edu.id} style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="school">School:</label>
      <input
        type="text"
        name="school"
        id="school"
        value={edu.school}
        onChange={handleChangeEducation}
      ></input>
      <label htmlFor="degree">Degree:</label>
      <select
        name="degree"
        id="degree"
        value={edu.degree}
        onChange={handleChangeEducation}
      >
        <option value="B.S.">Bachelors of Science</option>
        <option value="B.A.">Bachelors of Arts</option>
        <option value="M.S.">Masters of Science</option>
        <option value="M.A.">Bachelors of Arts</option>
        <option value="M.S.">Masters of Science</option>
        <option value="M.A.">Bachelors of Arts</option>
        <option value="Ph.D.">Doctorate</option>
      </select>
      <label htmlFor="gpa">GPA:</label>
      <input
        type="text"
        name="gpa"
        id="gpa"
        value={edu.gpa}
        onChange={handleChangeEducation}
      ></input>
      <div>
        <button id={edu.id} onClick={() => setActiveEduIdx(-1)}>
          Close
        </button>
        <button id={edu.id} onClick={(e) => handleChangeEducation(e, "delete")}>
          Delete
        </button>
      </div>
    </div>
  );
}
