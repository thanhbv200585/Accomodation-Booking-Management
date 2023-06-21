import React from "react";
import Header from '../components/header/Header';
import Calendar from "../components/CalendarComponent";
import Search from "../components/header/Search";
const HomePage = () => {
    return (
        <div className="home-page">
            <Header/>
            <Search/>
        </div>
    )
}

export default HomePage;