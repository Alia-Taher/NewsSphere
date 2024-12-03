import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const HomeNavbar = () => {
  return (
    <div>
      <div className="home-navbar">
        <Link to="/">
          <img className="logo" src={logo} path="/"></img>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
