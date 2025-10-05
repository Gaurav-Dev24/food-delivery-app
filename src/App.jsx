import React from 'react';
import './App.css';
import { Icon } from '@iconify/react';

/**
 * Header component
 *  - logo
 *  - nav items (Home, About Us, Contact Us, Cart)
 * Body component
 *  - Search bar
 *  - Restaurant container
 *    - Restaurant card (image, name, cuisine, rating, delivery time)
 * Footer component
 *  - copyright notice
 *  - links (Home, About Us, Contact Us, Cart)
 *  - address
 *  - contact information
 */

function App() {

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

  const Header = () => {
    return (
      <div className="header d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="logo-container">
          <img
            src="/food-delivery-logo.png"
            alt="Logo"
            className="logo w-50 h-50"
          />
        </div>
        <div className="nav-links d-flex gap-3">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <a href="#cart" className="nav-link">Cart</a>
        </div>
      </div>
    );
  }
  
  const RestaurantCard = () => {
    return (
      <div className="restaurant-card">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"
          alt="Restaurant"
          className="card-image"
        />
        <div className="card-body p-3 bg-light">
          <h5 className="card-title">Restaurant Name</h5>
          <p className="card-text">Biryani, North Indian, Asian</p>
          <p className="card-text">4.5  {getStars(4.5)}</p>
          <p className="card-text">30 mins</p>
        </div>
      </div>
    )
  }

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
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    );
  }
 
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
