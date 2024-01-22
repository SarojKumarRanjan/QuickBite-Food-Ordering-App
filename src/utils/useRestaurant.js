import { MENU_URL } from "../constant";
import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(MENU_URL + id);
        const jsonData = await data.json();
        setRestaurantInfo(jsonData);
      } catch (error) {
        console.error("Error fetching restaurant info:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return restaurantInfo;
};

export default useRestaurant;
