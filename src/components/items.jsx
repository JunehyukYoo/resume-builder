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
        <p>{edu.school}</p>
        <p>
          {edu.startDate} – {edu.endDate}
        </p>
      </div>
      {!(edu.school === "Untitled") && (
        <div style={{ fontSize: "0.8rem" }}>
          <p>
            {edu.degree} in {edu.major}
          </p>
          <p>{`GPA: ${edu.gpa}`}</p>
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
    <div>
      <label htmlFor="school-name">School:</label>
      <input type="text" name="school-name" id="school-name"></input>
      <button id={edu.id} onClick={() => setActiveEduIdx(-1)}>
        Close
      </button>
      <button id={edu.id} onClick={(e) => handleChangeEducation(e, "delete")}>
        Delete
      </button>
    </div>
  );
}
