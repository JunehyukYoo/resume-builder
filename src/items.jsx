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
        <h6 style={{ fontSize: "20px" }}>{edu.school}</h6>
        <p style={{ fontSize: "16px" }}>
          {edu.school === "Untitled"
            ? "From - To"
            : formatDates(edu.startDate, edu.endDate)}
        </p>
      </div>
      {edu.school !== "Untitled" && (
        <div
          style={{
            textAlign: "left",
          }}
        >
          <p>
            {edu.degree} in {edu.major}
          </p>
          <p>
            {`GPA: ${edu.gpa}`}
            <br />
            {`Relevant Coursework: ${edu.relevantCoursework}`}
          </p>
        </div>
      )}
    </div>
  );
}

export function ExperienceItem({ exp }) {
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
        <h6 style={{ fontSize: "20px" }}>{exp.company}</h6>
        <p style={{ fontSize: "16px" }}>
          {exp.company === "Untitled"
            ? "From - To"
            : formatDates(exp.startDate, exp.endDate)}
        </p>
      </div>
      {!(exp.compay === "Untitled") && (
        <div
          style={{
            textAlign: "left",
          }}
        >
          <p>{exp.title}</p>
          <p>{exp.description}</p>
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

export function ExperienceFormItem({ isActive, exp, handleChange }) {
  const [handleChangeExperience, setActiveExpIdx] = handleChange;
  return !isActive ? (
    <div
      key={exp.id}
      id={exp.id}
      onClick={(e) => setActiveExpIdx(e.target.id)}
      className="inactive-exp"
    >
      {exp.company}
    </div>
  ) : (
    <div id={exp.id} className="active-exp">
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        name="company"
        id="company"
        value={exp.company}
        onChange={handleChangeExperience}
      ></input>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={exp.title}
        onChange={handleChangeExperience}
      ></input>
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        name="location"
        id="location"
        value={exp.location}
        onChange={handleChangeExperience}
      ></input>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={exp.startDate}
        onChange={handleChangeExperience}
      ></input>
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={exp.endDate}
        onChange={handleChangeExperience}
      ></input>
      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        id="description"
        value={exp.description}
        onChange={handleChangeExperience}
        style={{ resize: "none", height: "100px" }}
      ></textarea>
      <div>
        <button id={exp.id} onClick={() => setActiveExpIdx(-1)}>
          Close
        </button>
        <button
          id={exp.id}
          onClick={(e) => handleChangeExperience(e, "delete")}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
