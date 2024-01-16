import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageadd } from "../constant";
import MenuList from "./MenuList";

const RestaurantPage = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantinfo] = useState({});
  const [eachRestaurantInfo,setEachRestaurantInfo] = useState({});

  console.log(eachRestaurantInfo);

  useEffect(() => {
    getRestaurantInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4855122&lng=77.4902726&restaurantId=" +
        id
    );
    const jsonData = await data.json();
    // console.log(jsonData?.data?.cards[0]?.card?.card?.info);
    setRestaurantinfo(jsonData?.data?.cards[0]?.card?.card?.info);
    setEachRestaurantInfo(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
  }

  return (
    <div className=" mt-14 mr-60 ml-60">
      <div className="flex justify-between">
        <img
          className=" rounded-lg h-80 w-80"
          src={imageadd + restaurantInfo?.cloudinaryImageId}
          alt="RestaurantInfo"
        />
        <div className="rounded-lg h-80 w-[600px] bg-slate-300">
          <h1 className=" text-4xl py-10 p-14 font-bold">
            {restaurantInfo?.name}
          </h1>
          {
            <h2 className="text-xl px-14 mb-2 font-semibold">
              {restaurantInfo?.cuisines?.join(" , ")}
            </h2>
          }
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
        <MenuList info={eachRestaurantInfo[1]?.card?.card?.itemCards}/>


        {(console.log(eachRestaurantInfo[1]?.card?.card?.itemCards))}
      </div>
    </div>
  );
};

export default RestaurantPage;
