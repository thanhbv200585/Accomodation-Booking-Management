import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="d-flex justify-content-center" style={{ height: "50px", background: "#003580" }}>
      <div className="d-flex align-items-center justify-content-between text-white" style={{ maxWidth: "1024px", width: "100%" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="fw-bold">l am a booking</span>
        </Link>
        <div className="">
          <Link to="http://localhost:3000/guest/register" className="navLink m-2 text-decoration-none">
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
