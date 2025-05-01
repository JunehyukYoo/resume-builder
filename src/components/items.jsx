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
      <p style={{ fontSize: "0.8rem" }}>
        {edu.degree} in {edu.major}
      </p>
      <p style={{ fontSize: "0.8rem" }}>
        {"GPA: "}
        {edu.gpa}
      </p>
    </div>
  );
}
