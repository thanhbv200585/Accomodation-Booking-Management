import React from "react";
import Header from '../components/Header/Header'
import Calendar from "../components/CalendarComponent";
import Search from "../components/Header/Search";
const HomePage = () => {
    return (
        <div className="home-page">
            <Header/>
            <Search/>
        </div>
    )
}

export default HomePage;