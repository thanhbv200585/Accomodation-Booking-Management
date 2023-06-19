import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg';
const Header = () => {
    return (
        <div className="header">
            <header className="header">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/" style={{color: "#fff", height: "100px"}}>
                            <img src={logo}  style={{width: '100px', height: '21px'}} alt="Booking.com"/>
                        </Link>
                    </div>
                    <div className="sign-in">
                        <ul className="sign-in">
                            <li>
                                <button className="theme"><a href="/">List your property</a></button>
                            </li>
                            <li>
                                <button className="dark"><a href="/register">Register</a></button>
                            </li>
                            <li>
                                <button className="dark"><a href="/login">Sign in</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
    
}

export default Header;

