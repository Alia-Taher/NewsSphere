import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinks = ({ to, name, onClick, className }) => {
  return (
    <Link to={to} className={`nav-link ${className}`} onClick={onClick}>
      {name}
    </Link>
  );
};
NavLinks.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavLinks;
