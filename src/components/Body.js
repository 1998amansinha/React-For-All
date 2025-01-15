import { useState } from "react";
import { resObj } from "../constants/constant";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const resturantData = resObj.restaurants;

  const [filterResturant, setFilterResturant] = useState(resturantData);

  const filterTopRatedResturant = () => {
    const filterRes = filterResturant.filter(
      (resturant) => resturant.info.avgRating > 4.5
    );
    console.log(filterRes);
    setFilterResturant(filterRes);
  };

  return (
    <div id="body">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="search">
        <button onClick={filterTopRatedResturant}>Top Rated Resturants</button>
      </div>
      <div className="res-container">
        {/* Use filterResturant instead of resturantData */}
        {filterResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
