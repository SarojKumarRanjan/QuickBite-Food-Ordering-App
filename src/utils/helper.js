
export function SearchRestaurant(searchText, restaurants){
    if (searchText === "") {
        return restaurants;
      } else {
        const lowercaseSearchText = searchText.toLowerCase();
        return (restaurants.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(lowercaseSearchText))
        );
      }
}