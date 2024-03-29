import "./hotel.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FaMapMarkerAlt } from 'react-icons/fa'

import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Room from "../room/Room";

const Hotel = () => {
  const { id, hotelId } = useParams()
  // const location = useLocation();
  // const hotelId = location.pathname.split("/")[2];  thành
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0)
  const [openPopup, setOpenPopup] = useState(false);
  const INITIAL_CLICKED_ROOM = {
    "roomType": "",
    "price": 0,
    "description": "",
    "service": [],
    "numberRooms": 0,
    "images": []
  }
  const [clickedRoom, setClickedRoom] = useState(INITIAL_CLICKED_ROOM)

  const [data, setData] = useState(
    {
      "id": null,
      "nameHotel": "",
      "location": "",
      "score": 0.0,
      "shortDescription": "",
      "detailDescription": "",
      "assess": 4,
      "avatarHotel": "",
      "numberRating": 0,
      "rooms": [],
      "roomNumber": {}
    });


  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8082/api/guest/hotels/${hotelId}/details`
      var apiData = await axios.post(url, {
        checkIn: "2023-06-27",
        checkOut: "2023-06-28"
      }
      )
      setData(apiData.data)
    }
    fetchData();
  }, [])

  useEffect(() => {
    let total = 0;
    data.rooms.map(room => {
      if (selection[room.roomType] !== undefined) {
        total += room.price * selection[room.roomType]
      }
    })
    setTotalPrice(total * days);
    // console.log(totalPrice)
    // console.log("selection", selection)
  }, [selection])
  const { city, dates, options, dispatch } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const getDays = (dates) => {
    if (dates.length === 0) return 1;
    var days = dayDifference(dates[0].endDate, dates[0].startDate);
    if (days) return days;
    else return 1;
  }
  const days = getDays(dates)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  const handleClick = () => {
    if (user) {
      console.log("selection: ", selection)
      if (isObjectEmpty(selection)) {
        alert("Please select your room");
      } else {
        console.log(user)
        navigate(`/customer/${id}/booking/${hotelId}`, {state: {"booking": selection, "price": totalPrice, "id": hotelId}})
        dispatch({ type: "NEW_SEARCH", payload: { city, dates, options } })
      }
    } else {
      navigate("/login");
    }
  };

  const handleRoomClick = (room) => {
    setOpenPopup(true);
    setClickedRoom(room);
  }
  if (!data)
    return (
      <div>
        Loading...
      </div>
    )
    console.log("data: ", data)
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={data.photos[slideNumber]}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
          <h1 className="text-xl font-bold text-[#003b95] hover:text-[#000]">{data === undefined ? "" : data.nameHotel}</h1>
          <div className='my-3'>
            <FaMapMarkerAlt
              className='me-2'
            />
            <span
              className="fs-6 fst-italic"
              style={{ color: "#0000FF" }}
            >
              {data === undefined ? "" : data.location}
            </span>
          </div>

          <div className="hotelImages">
            <div className="hotelImgWrapper">
              <img
                onClick={() => handleOpen(0)}
                src={data.avatarHotel}
                alt=""
                className="hotelImg"
              />
            </div>
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="text-xl font-bold">{data.nameHotel}</h1>
              <p className="hotelDesc">{data.detailDescription}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of {data.score}!
              </span>
              <h3>
                <b>VND {totalPrice}</b> ({days}{" "}
                nights)
              </h3>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
            <div className="roomTable">
              <table className="table">
                <thead className="thead">
                  <tr>
                    <th className="column">Accomodation type</th>
                    <th className="column">Price for {days} nights</th>
                    <th className="column">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rooms.map((room, index) => {
                    console.log(room)
                  return (
                    <tr key={index}>
                      <td className="column"><button className="room-type" onClick={() => handleRoomClick(room)}>{room.roomType}</button></td>
                      <td className="column">{
                        <select name="numberRoom" onChange={(e) => {
                          setSelection({
                            ...selection,
                            [room.roomType]: e.target.value.split(' ')[0]
                          })
                          console.log(selection)
                        }}>
                          {[...Array(data.roomNumber[room.roomType] !== undefined ? data.roomNumber[room.roomType] + 1 : 1).keys()].map((num) => (
                            <option key={num}>{num}   (VND {num * room.price})</option>
                          ))}
                        </select>
                      }</td>
                      <td className="column-price">VND {room.price}</td>
                      <Room trigger={openPopup} setTrigger={setOpenPopup} data={clickedRoom}>
                      </Room>
                    </tr>
                  )
                })}
              </tbody>
              </table>
            </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
