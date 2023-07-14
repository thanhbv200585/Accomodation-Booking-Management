import "./featured.css";

const Featured = () => {
  const handleClick = (city) => {
    console.log(city)
  }

  return (
    <div className="featured">
      {
        <>
          <div className="featuredItem">
            <img
              src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-c3635d7/images/Things-to-do-in-Hanoi-Vietnam-Hoan-Kim-Lake.jpg"
              alt=""
              className="featuredImg hover:cursor-pointer"
              onClick={() => handleClick("Hanoi")}
            />
            <div className="featuredTitles">
              <h1 className="font-bold text-xl">Hanoi</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://theplanetd.com/images/things-to-do-in-ho-chi-minh-city-reunification-palace.jpg"
              alt=""
              className="featuredImg hover:cursor-pointer"
              onClick={() => handleClick("Ho Chi Minh City")}
            />
            <div className="featuredTitles">
              <h1 className="font-bold text-xl">Ho Chi Minh City</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg"
              alt=""
              className="featuredImg hover:cursor-pointer"
              onClick={() => handleClick("Danang")}
            />
            <div className="featuredTitles">
              <h1 className="font-bold text-xl">Da Nang</h1>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Featured;
