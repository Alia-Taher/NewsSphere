import NavLinks from "./NavLinks";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ path }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} path="/"></img>
      </Link>
      <div className="nav-links">
        <NavLinks to={path} name="Home" className="home-link" />
      </div>
    </div>
  );
};
Navbar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Navbar;
