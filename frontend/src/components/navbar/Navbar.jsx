import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">l am a booking</span>
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
  )
}

export default Navbar