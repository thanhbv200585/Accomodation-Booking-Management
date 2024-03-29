import { Link } from "react-router-dom";
const NavLR = () => {

  return (
    <div className="d-flex justify-content-center" style={{ height: "50px", background: "#0066FF" }}>
      <div className="d-flex align-items-center justify-content-between text-white" style={{ maxWidth: "1024px", width: "100%" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="fw-bold text-xl">vietbooking</span>
        </Link>
      </div>
    </div>

  );
};

export default NavLR;
