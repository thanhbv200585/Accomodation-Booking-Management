import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">lamabooking</span>
      </Link>
        <div className="navItems">
          <Link to="http://localhost:3000/api/guest/register" className="navLink m-2 text-decoration-none">
            Register
          </Link>
          <Link to="http://localhost:3000/login" className="navLink m-2 text-decoration-none">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
