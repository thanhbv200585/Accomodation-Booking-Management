import { Link } from "react-router-dom";
import "./searchItem.css";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";


const SearchItem = ({ item }) => { 
  
  const { dates } = useContext(SearchContext)

  // console.log(dates)
  // console.log(item)
  const assessment = (score) => {
    if (score < 2) return "Poor";
    else if (score >= 2 && score < 4) return "Fair";
    else if (score >= 4 && score < 6) return "Good";
    else if (score >= 6 && score < 8) return "Very Good";
    else if (score >= 8 && score <= 9.5) return "Excellent";
    else if (score > 9.5 && score <= 10) return "Exceptional";
  }
  console.log("1")
  return (
    <div className="searchItem">
      <img src={item.avatarHotel} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">
          <Link to={`/hotels/${item.id}`} state={{item: item}} style={{textDecoration:"none"}}>
            {item.nameHotel}
          </Link>
        </h1>
        <span className="siDistance">{item.location}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siFeatures">{item.shortDescription}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.number_rating === undefined ? <div className="siRating">
          <span>{assessment(item.score)}</span>
          <button>{item.score}</button>
        </div> :
        <div>
          <span style={{background: "#febb02"}}> New to Booking.com</span>
        </div>
        }
        <div className="siDetailTexts">
          <Link to={`/hotels/${item.id}`} state={{item: item}}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
