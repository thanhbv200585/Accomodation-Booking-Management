import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data1, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );
    let data = [{
      id:"1",
      nameHotel:"Crescendo Studio & Cafe",
      location:"TayHo District, Ha Noi, Vietnam",
      score:"",
      shortDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. ",
      detailDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. The hotel features family rooms. Selected rooms also feature a kitchen with a fridge and a toaster. Guests at the hotel can enjoy a vegan breakfast. Quan Thanh Temple is 4.5 km from Crescendo Studio & Cafe, while Hanoi Old City Gate is 5 km from the property. The nearest airport is Noi Bai International Airport, 19 km from the accommodation.",
      assess: 5,
      avatarHotel:"https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-1920w.jpg",
      numberRatting:""
    }, 
    {
      id:"1",
      nameHotel:"Crescendo Studio & Cafe",
      location:"TayHo District, Ha Noi, Vietnam",
      score:"",
      shortDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. ",
      detailDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. The hotel features family rooms. Selected rooms also feature a kitchen with a fridge and a toaster. Guests at the hotel can enjoy a vegan breakfast. Quan Thanh Temple is 4.5 km from Crescendo Studio & Cafe, while Hanoi Old City Gate is 5 km from the property. The nearest airport is Noi Bai International Airport, 19 km from the accommodation.",
      assess: 5,
      avatarHotel:"https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-1920w.jpg",
      numberRatting:""
    },
    {
      id:"1",
      nameHotel:"Crescendo Studio & Cafe",
      location:"TayHo District, Ha Noi, Vietnam",
      score:"",
      shortDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. ",
      detailDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. The hotel features family rooms. Selected rooms also feature a kitchen with a fridge and a toaster. Guests at the hotel can enjoy a vegan breakfast. Quan Thanh Temple is 4.5 km from Crescendo Studio & Cafe, while Hanoi Old City Gate is 5 km from the property. The nearest airport is Noi Bai International Airport, 19 km from the accommodation.",
      assess: 5,
      avatarHotel:"https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-1920w.jpg",
      numberRatting:""
    },
    {
      id:"1",
      nameHotel:"Crescendo Studio & Cafe",
      location:"TayHo District, Ha Noi, Vietnam",
      score:"",
      shortDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. ",
      detailDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. The hotel features family rooms. Selected rooms also feature a kitchen with a fridge and a toaster. Guests at the hotel can enjoy a vegan breakfast. Quan Thanh Temple is 4.5 km from Crescendo Studio & Cafe, while Hanoi Old City Gate is 5 km from the property. The nearest airport is Noi Bai International Airport, 19 km from the accommodation.",
      assess: 5,
      avatarHotel:"https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-1920w.jpg",
      numberRatting:""
    },
    {
      id:"1",
      nameHotel:"Crescendo Studio & Cafe",
      location:"TayHo District, Ha Noi, Vietnam",
      score:"",
      shortDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. ",
      detailDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. The hotel features family rooms. Selected rooms also feature a kitchen with a fridge and a toaster. Guests at the hotel can enjoy a vegan breakfast. Quan Thanh Temple is 4.5 km from Crescendo Studio & Cafe, while Hanoi Old City Gate is 5 km from the property. The nearest airport is Noi Bai International Airport, 19 km from the accommodation.",
      assess: 5,
      avatarHotel:"https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-1920w.jpg",
      numberRatting:""
    },
    {
      id:"1",
      nameHotel:"Crescendo Studio & Cafe",
      location:"TayHo District, Ha Noi, Vietnam",
      score:"",
      shortDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. ",
      detailDescription:"Set 3.3 km from West Lake, Crescendo Studio & Cafe offers 5-star accommodation in Hanoi and has a terrace, a restaurant and a bar. This 5-star hotel offers room service and a 24-hour front desk. The hotel features family rooms. Selected rooms also feature a kitchen with a fridge and a toaster. Guests at the hotel can enjoy a vegan breakfast. Quan Thanh Temple is 4.5 km from Crescendo Studio & Cafe, while Hanoi Old City Gate is 5 km from the property. The nearest airport is Noi Bai International Airport, 19 km from the accommodation.",
      assess: 5,
      avatarHotel:"https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-1920w.jpg",
      numberRatting:""
    }
  ]
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
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
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
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
