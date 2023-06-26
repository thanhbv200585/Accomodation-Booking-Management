import React, { useState, useRef } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';
const Cusnavbar = ({ name }) => {
  const [isBellActive, setIsBellActive] = useState(false)
  const [shownotification, setShowNotification] = useState(false)
  const target = useRef(null);

  const handleClick = () => {
    setIsBellActive(!isBellActive);
    setShowNotification(!shownotification)

  };

  const hoverHelp = (props) => (
    <Tooltip id="button-tooltip" className='mt-3' {...props}>
      Customer service
    </Tooltip>
  );


  const popover = (
    <Popover id="popover-basic" className='rounded-0' style={{ width: "500px" }}>
      <Popover.Body>
        notification here


      </Popover.Body>
    </Popover>
  );

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>

        <div>
          <OverlayTrigger
            placement='bottom'
            overlay={hoverHelp}
            delay={{ show: 250, hide: 400 }}
          >
            <Link to="/help" className='mx-3'>
              <FaQuestionCircle className="border-0" style={{ fontSize: '24px' }}/>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button className={`
          ${isBellActive ? 'active' : 'bg-transparent'}
           border-0
           `}
              onClick={handleClick}
            >
              <FaBell style={{ fontSize: '24px' }}/>
            </Button>
          </OverlayTrigger>
        </div>



        <div className="navItems">
          hai son
        </div>
      </div>
    </div>
  );
};

export default Cusnavbar;
