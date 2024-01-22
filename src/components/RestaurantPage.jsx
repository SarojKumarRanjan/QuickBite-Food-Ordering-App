import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageadd } from "../constant";
import MenuList from "./MenuList";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantPage = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [eachRestaurantInfo, setEachRestaurantInfo] = useState(null);

  const jsonData = useRestaurant(id);

  useEffect(() => {
    if (jsonData) {
      setRestaurantInfo(jsonData?.data?.cards[0]?.card?.card?.info);
      setEachRestaurantInfo(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      //console.log("useEffect");
    }
  }, [jsonData]);

  return jsonData ? (
    <div className="mt-14 mr-60 ml-60">
      <div className="flex justify-between">
        <img
          className="rounded-lg h-80 w-80"
          src={imageadd + restaurantInfo?.cloudinaryImageId}
          alt="RestaurantInfo"
        />
        <div className="rounded-lg h-80 w-[600px] bg-slate-200">
          <h1 className="text-4xl py-10 p-14 font-bold">{restaurantInfo?.name}</h1>
          <h2 className="text-xl px-14 mb-2 font-semibold">
            {restaurantInfo?.cuisines?.join(" , ")}
          </h2>
          <h3 className="text-xl px-14 mb-2 font-semibold">
            {restaurantInfo?.areaName +
              " , " +
              restaurantInfo?.sla?.lastMileTravelString}
          </h3>
          <h3 className="text-xl px-14 mb-2 font-semibold">
            Expected delivery time: {restaurantInfo?.sla?.slaString}
          </h3>
          <h3 className="text-xl px-14 mb-2 font-semibold">
            {restaurantInfo?.avgRatingString +
              " Stars , " +
              restaurantInfo?.totalRatingsString}
          </h3>
        </div>
      </div>
      <div>
        {eachRestaurantInfo &&
          Object.values(eachRestaurantInfo)
            .slice(2)
            .map((eachMenu, index) => (
              <MenuList info={eachMenu} key={index} />
            ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantPage;
