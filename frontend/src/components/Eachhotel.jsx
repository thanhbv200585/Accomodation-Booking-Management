import { Link, useParams } from "react-router-dom";
import "./searchItem/searchItem.css";
import { useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

const assessScale = ['Poor', 'Fair', 'Good', "Very Good", 'Excellent'];

const Eachhotel = ({ item }) => {
    // console.log(item)
    const { dates } = useContext(SearchContext)
    const { id } = useParams()
    const assessment = (score) => {
        if (score < 2) return "Poor";
        else if (score >= 2 && score < 4) return "Fair";
        else if (score >= 4 && score < 6) return "Good";
        else if (score >= 6 && score < 8) return "Very Good";
        else if (score >= 8 && score <= 9.5) return "Excellent";
        else if (score > 9.5 && score <= 10) return "Exceptional";
    }
    return (
        <div className="searchItem">
            <Link
            to={`/owner/${id}/hotel/${item.id}`}
            state={{ item: item }}
            onClick={() => window.scrollTo(0, 0)}
            >
                <img src={item.avatarHotel} alt="" className="siImg" />
            </Link>
            <div className="siDesc">
                <h1 className="siTitle">
                    <Link 
                    to={`/owner/${id}/hotel/${item.id}`}
                    state={{ item: item }} style={{ textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                    >
                        {item.nameHotel}
                    </Link>
                </h1>
                <span className="siDistance"><b>{item.location}</b></span>
                <span className="siFeatures">{item.shortDescription}</span>

            </div>
            <div className="siDetails">
                {item.number_rating === undefined ? <div className="siRating">
                    <span>{assessment(item.score)}</span>
                    <button>{item.score}</button>
                </div> :
                    <div>
                        <span style={{ background: "#febb02" }}> New to Booking.com</span>
                    </div>
                }
                <div className="siDetailTexts">
                    <Link
                    to={`/owner/${id}/hotel/${item.id}`}
                    state={{ item: item }}
                    onClick={() => window.scrollTo(0, 0)}
                    >
                        <button className="siCheckButton">Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Eachhotel;
