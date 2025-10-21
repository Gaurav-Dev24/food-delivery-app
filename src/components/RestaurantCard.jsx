import React from "react";
import { Icon } from '@iconify/react';
import { CDN_URL } from "../utils/constants.jsx";

// function to show stars based on rating
function getStars(rating) {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<Icon key={i} icon="mdi:star" width={20} height={20} color='#E49A20' className="mt-0" />);
    }
    if (rating % 1 !== 0) {
        stars.push(<Icon key="half" icon="mdi:star-half" width={20} height={20} color='#E49A20' className="mt-0" />);
    }
    return stars;
}

// Destructuring props in the function parameter itself
const RestaurantCard = (info) => {
    const { name, cuisines, avgRating, sla: { slaString: deliveryTime }, costForTwo, cloudinaryImageId } = info; // Destructuring props

    return (
        <div className="restaurant-card">
            <img
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt="Restaurant"
                className="card-image"
            />
            <div className="card-body p-3">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{cuisines.join(", ")}</p>
                <p className="card-text">{avgRating} {getStars(avgRating)}</p>
                <p className="card-text">{deliveryTime}, {costForTwo}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;