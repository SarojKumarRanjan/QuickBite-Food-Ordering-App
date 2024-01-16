import Cards from "./Cards";
// import { restaurantList } from "../constant";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import CardError from "./CardError";
import { Link } from "react-router-dom";

function searchRestaurant(searchText, restaurants) {
  if (searchText === "") {
    return restaurants;
  } else {
    const lowercaseSearchText = searchText.toLowerCase();
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(lowercaseSearchText)
    );
  }
}


function Body() {


  const [searchInput, setSearchInput] = useState([]);
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [searchedRestaurantList, setSearchedRestaurantList] =
    useState([]);
  // console.log(searchInput);
 // console.log("render body component ");

 


 useEffect(() => {
    getAlldata();
   //setSearchedRestaurantList(allRestaurantData)
   
},[])

 async function getAlldata(){
  const allData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4855122&lng=77.4902726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const jsonData = await allData.json();
  const allInfo = await jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     console.log(allInfo);

  setAllRestaurants(allInfo);
  setSearchedRestaurantList(allInfo);

   
  
}

//jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants


  return (allRestaurants?.length === 0) ? <Shimmer/> : (
    <div className="">
      <div className="flex ">
        <input
          className="my-6 border-2"
          type="text"
          placeholder="Search Restaurants"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = searchRestaurant(searchInput,allRestaurants);
            setSearchedRestaurantList(data);
          }}
          className="mx-7 px-2 h-10 my-6 border-2"
        >
          Search
        </button>
      </div>

      <div className="flex gap-14 flex-wrap my-4">
        {
            (searchedRestaurantList?.length === 0) ? <CardError /> : searchedRestaurantList.map((restaurant) => {
          
          return <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}> 
          <Cards  {...restaurant.info} /> 
          </Link>



        })}
        
      </div>
    </div>
  );
}

export default Body;
