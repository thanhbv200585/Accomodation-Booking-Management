import "./navbar.css";
import { Link } from "react-router-dom";
const NavLR = () => {

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">lamabooking</span>
                </Link>
            </div>
        </div>
    );
};

export default NavLR;
