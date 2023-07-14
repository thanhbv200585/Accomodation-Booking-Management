import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8082/api/guest/hotels";
    const fetchHotels = async () => {
      const response = await axios.get(url, { params: { pageSize: 4 } });
      setHotels(response.data);
    };

    fetchHotels();
  }, []);
  // const images = [
  //   "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  // ];
  // return (
  //   <div className="w-100 max-w-5xl flex justify-between gap-4">
  //     <>
  //       {
  //         images.map((img, i) => (
  //           <div className="flex-1 rounded-md overflow-hidden cursor-pointer" key={i}>
  //             <img src={img} alt="" className="w-full h-150 object-cover" />
  //             <div className="text-lg text-gray-700 capitalize"></div>
  //           </div>
  //         ))}
  //     </>
  //   </div>
  // );

  return (
    <div className="w-100 max-w-5xl flex justify-between gap-4">
      <>
        {hotels && hotels.length > 0 ? (
          hotels.map((hotel, i) => (
            <Link to={ `hotels/${hotel.id}`} key={i}>
              <div className="flex-1 rounded-md overflow-hidden cursor-pointer bg-gray-100" key={i}>
                <img src={hotel.avatarHotel} alt="" className="w-full h-150 object-cover"/>
                <div className="p-2">
                  <div className="text-sm font-bold text-gray-700 h-16 overflow-hidden">
                    {hotel.nameHotel}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No</p>
        )}
      </>
    </div>
  );
};

export default PropertyList;
