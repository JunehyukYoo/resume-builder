import { formatDates } from "./utils";

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
          {formatDates(edu.startDate, edu.endDate, edu.completed)}
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
          <p>{`Relevant Coursework: ${edu.relevantCoursework}`}</p>
        </div>
      )}
    </div>
  );
}

export function EducationFormItem({ isActive, edu, handleChange }) {
  const [handleChangeEducation, setActiveEduIdx] = handleChange;
  return !isActive ? (
    <div
      key={edu.id}
      id={edu.id}
      onClick={(e) => setActiveEduIdx(e.target.id)}
      className="inactive-edu"
    >
      {edu.school}
    </div>
  ) : (
    <div id={edu.id} className="active-edu">
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
      <label htmlFor="major">Major:</label>
      <input
        type="text"
        name="major"
        id="major"
        value={edu.major}
        onChange={handleChangeEducation}
      ></input>
      <label htmlFor="gpa">GPA:</label>
      <input
        type="text"
        name="gpa"
        id="gpa"
        value={edu.gpa}
        onChange={handleChangeEducation}
      ></input>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={edu.startDate}
        onChange={handleChangeEducation}
      ></input>
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={edu.endDate}
        onChange={handleChangeEducation}
      ></input>
      <label htmlFor="relevantCoursework">Relevant Coursework:</label>
      <textarea
        name="relevantCoursework"
        id="relevantCoursework"
        value={edu.relevantCoursework}
        onChange={handleChangeEducation}
        style={{ resize: "none", height: "100px" }}
      ></textarea>
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
