import { imageadd } from "../constant";



/* eslint-disable react/prop-types */
function Cards({cloudinaryImageId,name,areaName,avgRatingString,cuisines,costForTwo}) {









  return (
    <div className=" max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg h-60 w-60"
          src={imageadd+cloudinaryImageId }
          alt="Cards"
        />
      </a>
      <div className="p-2">
        <a href="#">
          <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h3>
          <h4 className="text-md"> Price: {costForTwo} </h4>
          <h4 className="text-md">Rating: {avgRatingString} Stars</h4>
          
          <h5 className="text-md">{cuisines.join(" , ")}</h5>
          <p className=" text-md">{areaName}</p>
        </a>
      </div>
    </div>
  );
}

export default Cards;
