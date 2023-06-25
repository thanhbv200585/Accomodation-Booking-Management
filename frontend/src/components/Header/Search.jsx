import React from "react";
import CalendarComponent from "../CalendarComponent";
import People from "../People";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from 'moment';
const { RangePicker } = DatePicker;

const Search = () => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState([])

  return (
    <div className="search_wrapper">
      <form>
        <div className="location">
          <input placeholder="Where would you like to go?" value={location}></input>
        </div>
        <div className="date">
          <RangePicker
            style={{ height: "100%" }}
            onChange={(values) => {
              setDates(
                values.map((item) => {
                  return moment(item.$d).format("YYYY-DD-MM");
                })
              );
            }}
          />
        </div>
        <div className="button">
          <button onClick={() => { }}>
            <a href="/search">Search</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;