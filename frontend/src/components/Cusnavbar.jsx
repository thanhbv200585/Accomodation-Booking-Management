import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';



const Cusnavbar = ({ name, id}) => {
  const [isBellActive, setIsBellActive] = useState(false)
  const [shownotification, setShowNotification] = useState(false)
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate()
  //variable
  //lấy tên của khách hàng để hiển thị lên navbar
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

  return (
    <div className="d-flex justify-content-center" style={{ height: "50px", background: "#003580" }}>
      <div className="d-flex align-items-center justify-content-between text-white" style={{ maxWidth: "1024px", width: "100%" }}>
        <div onClick={()=>{navigate(-1)}} style={{ color: "inherit", textDecoration: "none", cursor:"pointer" }}>
          <span className="fw-bold">l am a booking</span>
        </div>

        <div>
          <OverlayTrigger
            placement='bottom'
            overlay={hoverHelp}
            delay={{ show: 250, hide: 400 }}
          >
            <Link to="/help" className='mx-3'>
              <FaQuestionCircle className="border-0" style={{ fontSize: '24px' }} />
            </Link>
          </OverlayTrigger>

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
          className="navItems p-2"
          style={{ backgroundColor: hovered ? '#0071c2' : 'transparent', cursor: 'pointer', width: "200px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={showDetail}>
          <b>{name}</b>
        </div>
      </div>
    </div>
  );
};

export default Cusnavbar;
