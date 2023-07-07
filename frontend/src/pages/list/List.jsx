import "./list.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

const List = () => {
  const {user} = useContext(AuthContext)
  const location = useLocation();
  const [data, setData] = useState([])
  const [destination, setDestination] = useState(location.state === null ? "" : location.state.destination);
  const [dates, setDates] = useState(location.state === null ? "" : location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state === null ? "" : location.state.options);

  const { dispatch } = useContext(SearchContext)
  const loading = false;
  const url = "http://localhost:8082/api/guest/hotels"

  useEffect(() => {
    console.log(destination)
    axios.get(url, 
      {
        params: {"location": destination}
      }).then(response => {setData(response.data) 
        console.log(response)})
      .catch((err) => console.error(err))
  }, [])
  
  console.log(dates === "")

  const handleClick = async () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
    await axios.get(url).then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log("error", error)
      })
  };
  console.log(user)
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates === "" ? new Date(): dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates !== "" ? dates[0].endDate : new Date(), "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => {
                    setDates([item.selection])
                    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
                  }}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item.id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
