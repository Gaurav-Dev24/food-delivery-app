import React from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import restaurantData  from "../utils/mockData.jsx";
const Body = () => {
    return (
        <div className="body">
            <div className="search-bar p-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for restaurants or cuisines"
                />
            </div>
            <div className="restaurant-container d-flex flex-wrap gap-3 p-3">
                {restaurantData.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                ))}
            </div>
        </div>
    );
}

export default Body;