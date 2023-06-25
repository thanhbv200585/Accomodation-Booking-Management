import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Cusnavbar = ({name}) => {
  const { user } = useContext(AuthContext);


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">lamabooking</span>
      </Link>
        <div className="navItems">
           {name}
        </div>
      </div>
    </div>
  );
};

export default Cusnavbar;
