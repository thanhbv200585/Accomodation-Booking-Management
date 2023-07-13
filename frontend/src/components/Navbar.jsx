import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isBellActive, setIsBellActive] = useState(false)
  const [shownotification, setShowNotification] = useState(false)
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams()
  const name = localStorage.getItem("username")
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleClick = () => {
    setIsBellActive(!isBellActive);
    setShowNotification(!shownotification)

  };
  const hoverHelp = (props) => (
    <Tooltip id="button-tooltip" className='mt-3' {...props}>
      Customer service
    </Tooltip>
  );
  const showDetail = () => {
    navigate(`/account/${id}/info`)
  }
  const popover = (
    <Popover id="popover-basic" className='rounded-0' style={{ width: "500px" }}>
      <Popover.Body>
        notification here
      </Popover.Body>
    </Popover>
  );



  // console.log(user)
  return (
    <div className="d-flex justify-content-center"
    style={{ height: "6vh", background: "#0066FF"}}>
      <div className="d-flex align-items-center justify-content-between text-white p-2" style={{ maxWidth: "1024px", width: "100%" }}>
        <div onClick={() => { navigate(-1) }} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>
          <span className="fw-bold">l am a booking</span>
        </div>

          {user? (
            <>
              <div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <Button className={`
          ${isBellActive ? 'active' : 'bg-transparent'}
           border-0
           `}
                    onClick={handleClick}
                  >
                    <FaBell style={{ fontSize: '24px' }} />
                  </Button>
                </OverlayTrigger>
              </div>
              <div
                className="navItems d-flex align-items-center justify-content-center"
                style={{ backgroundColor: hovered ? '#0099FF' : 'transparent', cursor: 'pointer', width: "200px", height:"100%" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={showDetail}>
                <b>{name}</b>
              </div>
            </>
          ) : (
            <div className="">
              <Link to="http://localhost:3000/guest/register"
              className="navLink m-2 text-decoration-none"
              style={{color:"white"}}
              >
                Register
              </Link>
              <Link to="http://localhost:3000/login"
              className="navLink m-2 text-decoration-none"
              style={{color:"white"}}
              >
                Sign in
              </Link>
            </div>

          )}
      </div>
    </div>
  )
};

export default Navbar;
