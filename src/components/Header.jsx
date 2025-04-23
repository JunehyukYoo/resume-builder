import Icon from "../assets/docs.svg";

function Header() {
  return (
    <div className="header">
      <h1>
        <span>
          <img
            src={Icon}
            style={{ height: "1em", transform: "translateY(5px)" }}
          />{" "}
        </span>
        Resume Builder
      </h1>
    </div>
  );
}

export default Header;
