import { useState } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import restaurantData from "../utils/mockData.jsx";


const Body = () => {
    // Local state to manage filtered restaurant data - superpowerful variable
    const [filteredData, setFilteredData] = useState(restaurantData);

    return (    
    <div className="body">
        <div className="search-bar p-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search for restaurants or cuisines"
            />
        </div>
        <div className="filter-bar d-flex justify-content-start align-items-center gap-3 p-3">
            <button className="btn btn-outline-primary" onClick={() => {
                const filtered = restaurantData.filter(restaurant => parseFloat(restaurant.info.avgRating) >= 4);
                setFilteredData(filtered);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container d-flex flex-wrap gap-3 p-3">
            {filteredData.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            ))}
        </div>
    </div>
    );
}

export default Body;