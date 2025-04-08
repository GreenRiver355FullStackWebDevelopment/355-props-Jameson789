import Restaurant from "./Restaurant";
import {restaurants} from "../data/data.js";
//Container to hold and style seperate restraunt components
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {
        restaurants.map(restaurant => (
          <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>
        ))
      }
    </div>
  );
}

export default RestaurantsContainer;
