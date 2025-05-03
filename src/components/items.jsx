import { formatDates } from "../utils";

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

export function ProjectItem({ proj }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h6 style={{ fontSize: "20px" }}>{proj.title}</h6>
      <div
        style={{
          textAlign: "left",
        }}
      >
        {proj.description && <p>{proj.description}</p>}
        {proj.skillsUsed && <p>{`Skills used: ${proj.skillsUsed}`}</p>}
      </div>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
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

export function ProjectFormItem({ isActive, proj, handleChange }) {
  const [handleChangeProjects, setActiveProjIdx] = handleChange;
  return !isActive ? (
    <div
      key={proj.id}
      id={proj.id}
      onClick={(e) => setActiveProjIdx(e.target.id)}
      className="inactive-proj"
    >
      {proj.title}
    </div>
  ) : (
    <div id={proj.id} className="active-proj">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={proj.title}
        onChange={handleChangeProjects}
      ></input>
      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        id="description"
        value={proj.description}
        onChange={handleChangeProjects}
        style={{ resize: "none", height: "100px" }}
      ></textarea>
      <label htmlFor="skillsUsed">Skills Used:</label>
      <input
        type="text"
        name="skillsUsed"
        id="skillsUsed"
        value={proj.skillsUsed}
        onChange={handleChangeProjects}
      ></input>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button id={proj.id} onClick={() => setActiveProjIdx(-1)}>
          Close
        </button>
        <button id={proj.id} onClick={(e) => handleChangeProjects(e, "delete")}>
          Delete
        </button>
      </div>
    </div>
  );
}

export function LanguageFormItem({ isActive, lang, handleChange }) {
  const [handleChangeLanguages, setActiveLangIdx] = handleChange;
  return !isActive ? (
    <div
      key={lang.id}
      id={lang.id}
      onClick={(e) => setActiveLangIdx(e.target.id)}
      className="inactive-lang"
    >
      {lang.language}
    </div>
  ) : (
    <div id={lang.id} className="active-lang">
      <label htmlFor="language">Language:</label>
      <input
        type="text"
        name="language"
        id="language"
        value={lang.language}
        onChange={handleChangeLanguages}
      ></input>
      <label htmlFor="proficiency">Proficiency:</label>
      <select
        name="proficiency"
        id="proficiency"
        value={lang.proficiency}
        onChange={handleChangeLanguages}
      >
        <option value="1">Basic</option>
        <option value="2">Conversational</option>
        <option value="3">Fluent</option>
        <option value="4">Native</option>
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button id={lang.id} onClick={() => setActiveLangIdx(-1)}>
          Close
        </button>
        <button
          id={lang.id}
          onClick={(e) => handleChangeLanguages(e, "delete")}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
