import React from "react";
import { MENU_URL } from "../constants/url";

const ResturantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData.info;

  return (
    <div id="res-card">
      <img src={MENU_URL + cloudinaryImageId} alt="food image" />
      <div>
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default ResturantCard;
