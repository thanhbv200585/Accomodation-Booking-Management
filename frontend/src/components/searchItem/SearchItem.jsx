import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.avatarHotel} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.nameHotel}</h1>
        <span className="siDistance">{item.location}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        {/* <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span> */}
        <span className="siFeatures">{item.shortDescription}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.assess && <div className="siRating">
          <span>Excellent</span>
          <button>{item.assess}</button>
        </div>}
        <div className="siDetailTexts">
          {/* <span className="siPrice">${item.assess}</span> */}
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <Link to={`/hotels/${item.id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
