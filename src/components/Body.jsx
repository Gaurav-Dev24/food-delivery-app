import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";


const Body = () => {
    // Local state to manage filtered restaurant data - superpowerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // const [filteredData, setFilteredData] = useState(restaurantData);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5782678&lng=88.4609782&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    // Conditional rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body p-4">
            <div className="search-bar p-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for restaurants or cuisines"
                />
            </div>
            <div className="filter-bar d-flex justify-content-start align-items-center gap-3 p-3">
                <button className="btn btn-outline-primary" onClick={() => {
                    const filtered = listOfRestaurants.filter(restaurant => parseFloat(restaurant.info.avgRating) >= 4);
                    setListOfRestaurants(filtered);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container d-flex flex-wrap gap-3 p-3">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                ))}
            </div>
        </div>
    );
}

export default Body;