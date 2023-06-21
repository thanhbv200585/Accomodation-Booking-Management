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
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">
              <a href="/register" style={{textDecoration:"none", color:"#003580"}}>Register</a> 
            </button>
            <button className="navButton">
              <a href="/login" style={{textDecoration:"none", color:"#003580"}}>Login</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
