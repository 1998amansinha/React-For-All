import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { SWIGGY_API_URL } from "../constants/url";

const Body = () => {
  const [resturants, setResturants] = useState([]);
  const [copyResturant, SetCopyResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getResturantData = async () => {
      const response = await fetch(SWIGGY_API_URL);
      const json = await response.json();
      const resturantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResturants(resturantData);
      SetCopyResturant(resturantData);
    };
    getResturantData();
  }, []);

  console.log(resturants);

  const handleSearchFunctionality = () => {
    const searchResturant = copyResturant.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResturants(searchResturant);
  };

  const filterTopRatedResturant = () => {
    const filterRes = copyResturant.filter(
      (resturant) => resturant.info.avgRating > 4.5
    );
    setResturants(filterRes);
  };

  return !resturants.length ? (
    <div>Loading...</div>
  ) : (
    <div id="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleSearchFunctionality}>Search</button>
      </div>
      <div className="search">
        <button onClick={filterTopRatedResturant}>Top Rated Resturants</button>
      </div>
      <div className="res-container">
        {resturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
