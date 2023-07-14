import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import format from "date-fns/format";
import { useLocation } from "react-router";
import axios from "axios";
import SearchItem from "../searchItem/SearchItem";
import BookingForm from "./BookingForm";
import BookingModal from "./BookingModal";

const Booking = () => {
  var apiData;
  let startDate;
  let endDate;
  const { dates } = useContext(SearchContext);
  console.log(useLocation().state)
  const { booking, price} = useLocation().state

  const { id } = useLocation().state
  const [hotel, setHotel] = useState({})
  
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  console.log(dates)
  useEffect(()=>{
    const fetchData = async () => {
      const url = `http://localhost:8082/api/guest/hotels/${id}/detail`
      apiData = await axios.get(url)
      setHotel(apiData.data)
      console.log("Hotel", hotel)
    }
  fetchData();
  }, [])


  const getDays = (dates) => {
    startDate = format(dates.length !== 0 ? dates[0].startDate : new Date(), "yyyy-MM-dd")
    endDate = format(dates.length !== 0 ? dates[0].endDate : new Date(), "yyyy-MM-dd")  
    if (dates.length === 0)   return 1;
    var days = dayDifference(dates[0].endDate, dates[0].startDate);
    if (days) return days;
    else return 1;
  };
  
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  
  const Left = () => {
    console.log(booking)
    const days = getDays(dates);
    return (
      <div className="col-span-1">
        <div className="w-100 border-2 p-2 rounded-xl text-sm">
          <h5 className="font-semibold text-center text-base">Your booking details</h5>
          <div className="flex flex-col">
            <div className="time grid grid-cols-2 p-2 gap-2">
              <div className="font-bold border-r border-black">
                <span className="text-sm">Check-in</span>
                <div>
                  {startDate}
                </div>
              </div>
              <div className="font-bold">
                <span className="text-sm">Check-out</span>
                <div>
                  {endDate}
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 text-sm">
              <span>Total length of stay: <b>{days} nights</b></span>
            </div>
          </div>
          <hr/>
          <div className="pt-2">
            <div>You selected</div>
            <div></div>
            <table className="w-100">
              <thead>
                <tr className="bg-white">
                  <th>Roomtype</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(booking).map((key) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{booking[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr/>
          <div className="bg-gray-200 p-2 font-bold flex justify-between text-2xl">
            <div className="">Total</div>
            <span className="text-2xl">VND {price}</span>
          </div>
        </div>
      </div>
    );
  };
  
  const Right = () => {
    const [showModal, setShowModal] = useState(false);


    return (
      hotel && 
      <div className="col-span-2">
        <SearchItem item={hotel}/>
        <BookingForm booking={
          {"hotelId": id, "rooms": booking, "dateCheckIn": startDate, "dateCheckOut": endDate, "totalBill": price}
        }
          setShowModal={setShowModal}
        />
        <BookingModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-8 w-5/6 mx-auto">
      <Left />
      <Right />
    </div>
  );
};

export default Booking;
