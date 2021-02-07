import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleShowTask, isShown }) => {
  return (
    <div className="header-section">
      <header className="header">
        <h1>{title}</h1>
        <Button
          className="btn-default"
          onClick={() => toggleShowTask()}
          color={isShown ? "red" : "green"}
          text={isShown ? "Hide" : "Show"}
        />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Hello Matty",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
